# chloerui.com

Chloe Le's portfolio. Static site served by a Cloudflare Worker.

- `public/` — the site (index.html, runtime, images and videos in `_blob/`)
- `worker/` — sets the right file types for images/videos
- `wrangler.jsonc` — Worker config, attached to the chloerui.com custom domain
- `build.py` — regenerates `public/` from the design canvas's `Main.dc.html`

Deploy: push to `main` (Cloudflare Workers Builds runs `npx wrangler deploy`).

## Image copies
`build.py` makes lighter WebP copies of images in `public/_v/`, sized to 2x the largest size each image is shown (3x on phones). Border-frame images are converted at full size. The full-size viewer keeps the originals in `public/_blob/`. Sizes come from `src/imgsizes.json`. After adding or resizing images, run the local server, then `python3 tools/measure.py`, then `python3 build.py`. Images that haven't been measured just use the original.
