import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = `User-agent: Mediapartners-Google\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${new URL(base + '/sitemap.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
