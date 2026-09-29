#!/usr/bin/env bun
// Zero-dependency dev server for ./public with live reload.
// - HTML/JS/asset changes reload the page.
// - CSS changes are hot-swapped without a reload (scroll position is kept).
//
// Usage: bun scripts/serve.js [--port 5173] [--host]
//   --host   listen on all interfaces so you can open the site from your phone

import { createServer } from "node:http";
import { watch } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { networkInterfaces } from "node:os";
import { extname, join, normalize, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../public", import.meta.url));
const args = process.argv.slice(2);
const exposeHost = args.includes("--host");
const portArg = args.indexOf("--port");
const startPort = Number(portArg >= 0 ? args[portArg + 1] : process.env.PORT) || 5173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const reloadClient = `<script>
(() => {
  const source = new EventSource("/__reload");
  source.addEventListener("css", () => {
    for (const link of document.querySelectorAll('link[rel="stylesheet"]')) {
      const url = new URL(link.href);
      if (url.origin !== location.origin) continue;
      url.searchParams.set("t", Date.now());
      const next = link.cloneNode();
      next.href = url.href;
      next.onload = () => link.remove();
      link.after(next);
    }
  });
  source.addEventListener("reload", () => location.reload());
  source.onerror = () => console.info("[serve] connection lost — waiting for the server…");
})();
</script>`;

const clients = new Set();

function broadcast(event) {
  for (const res of clients) res.write(`event: ${event}\ndata: ${Date.now()}\n\n`);
}

async function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const filePath = normalize(join(root, decoded));
  if (filePath !== root && !filePath.startsWith(root + sep)) return null; // path traversal guard

  const candidates = [filePath, join(filePath, "index.html"), `${filePath}.html`];
  for (const candidate of candidates) {
    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {}
  }
  return null;
}

const server = createServer(async (req, res) => {
  if (req.url === "/__reload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
    });
    res.write(": connected\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  const file = (await resolveFile(req.url)) ?? (await resolveFile("/404.html"));
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
    return;
  }

  const status = file.endsWith(`${sep}404.html`) && !req.url.startsWith("/404") ? 404 : 200;
  const type = types[extname(file)] ?? "application/octet-stream";
  let body = await readFile(file);
  if (type.startsWith("text/html")) {
    body = body.toString().replace(/<\/body>/i, `${reloadClient}</body>`);
  }

  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(req.method === "HEAD" ? undefined : body);
});

// Debounce bursts of fs events (editors often write several times per save).
let pending = null;
let cssOnly = true;
watch(root, { recursive: true }, (_event, filename) => {
  if (!filename || filename.split(sep).some((part) => part.startsWith("."))) return;
  cssOnly &&= extname(filename) === ".css";
  clearTimeout(pending);
  pending = setTimeout(() => {
    const event = cssOnly ? "css" : "reload";
    console.log(`[serve] ${relative(root, join(root, filename))} changed → ${event}`);
    broadcast(event);
    cssOnly = true;
  }, 60);
});

// Keep SSE connections alive through proxies/sleep.
setInterval(() => {
  for (const res of clients) res.write(": ping\n\n");
}, 25_000).unref();

function listen(port, attemptsLeft = 10) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 0) listen(port + 1, attemptsLeft - 1);
    else throw error;
  });
  server.listen(port, exposeHost ? "0.0.0.0" : "localhost", () => {
    console.log(`\n  atsru dev server — live reload on\n\n  Local:   http://localhost:${port}/`);
    if (exposeHost) {
      for (const net of Object.values(networkInterfaces()).flat()) {
        if (net?.family === "IPv4" && !net.internal) console.log(`  Network: http://${net.address}:${port}/`);
      }
    }
    console.log("");
  });
}

listen(startPort);
