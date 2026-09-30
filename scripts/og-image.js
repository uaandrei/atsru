#!/usr/bin/env bun
// Renders scripts/og-image.html to public/og-image.png (1200×630) with headless Chrome.
// Set CHROME to the browser binary if it isn't in the default macOS location.

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const source = new URL("./og-image.html", import.meta.url).href;
const output = fileURLToPath(new URL("../public/og-image.png", import.meta.url));

const { status, stderr } = spawnSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1200,630",
  "--virtual-time-budget=2000",
  `--screenshot=${output}`,
  source,
]);

if (status !== 0) {
  console.error(stderr.toString());
  process.exit(status ?? 1);
}
console.log(`Wrote ${output}`);
