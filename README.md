# atsru

Marketing site for atsru. Plain HTML, CSS and JavaScript. There's no framework, build step or runtime dependency.

Requires [Bun](https://bun.sh).

```bash
bun run serve        # dev server with live reload on http://localhost:5173
bun run serve:host   # same, reachable from your phone on the local network
bun run deploy       # firebase deploy --only hosting
```

Deploying needs the Firebase CLI (`bun add -g firebase-tools`) and `firebase login`.

## Layout

```
public/            deployed as-is to Firebase Hosting
  index.html       the whole page (logo and mark are inline SVG)
  styles.css       design tokens at the top: lime, black, stone and grey from the brand README
  main.js          current-year stamp and active nav highlight
  fonts/           self-hosted Sora + Hanken Grotesk variable fonts (woff2)
  img/             work thumbnails (webp)
  favicon.*, icon-*.png, apple-touch-icon.png, site.webmanifest
scripts/serve.js   zero-dependency dev server: CSS changes hot-swap, everything else reloads
firebase.json      hosting config and cache headers
```

## Caching

HTML, CSS and JS are revalidated on every visit (`max-age=0, must-revalidate`), so a deploy is live immediately. Fonts are cached for a year and images for a week. If you replace a font or image, give it a new filename.
