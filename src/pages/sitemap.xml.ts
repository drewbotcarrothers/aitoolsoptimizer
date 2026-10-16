import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories } from '../data/categories';

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const tools = await getCollection('tools');
  const posts = await getCollection('blog', (p) => !p.data.draft);
  const paths = ['/', '/tools/', '/models/', '/about/', '/contact/', '/privacy/', '/cookies/', '/terms/', '/disclaimer/',
    ...(posts.length ? ['/blog/'] : []),
    ...Object.keys(categories).map((c) => `/tools/category/${c}/`),
    ...tools.map((t) => `/tools/${t.id}/`),
    ...posts.map((p) => `/blog/${p.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${new URL(base + p, site).href}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
