import TYPES from './types.json';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Send www and workers.dev traffic to the main domain.
    if (url.hostname === 'www.chloerui.com') {
      url.hostname = 'chloerui.com';
      return Response.redirect(url.toString(), 301);
    }
    const res = await env.ASSETS.fetch(request);
    const m = url.pathname.match(/^\/_blob\/([0-9a-f]{32})$/);
    if (!m || !res.ok) return res;
    const out = new Response(res.body, res);
    out.headers.set('Content-Type', TYPES[m[1]] || 'application/octet-stream');
    out.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return out;
  },
};
