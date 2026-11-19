# chloerui.com

Chloe Le's portfolio. Static site served by a Cloudflare Worker.

- `public/` — the site (index.html, runtime, images and videos in `_blob/`)
- `worker/` — sets the right file types for images/videos
- `wrangler.jsonc` — Worker config, attached to the chloerui.com custom domain
- `build.py` — regenerates `public/` from the design canvas's `Main.dc.html`

Deploy: push to `main` (Cloudflare Workers Builds runs `npx wrangler deploy`).
