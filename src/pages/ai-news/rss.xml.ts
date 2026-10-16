import type { APIRoute } from 'astro';
import { getAiNews } from '../../data/aiNews';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const abs = (p: string) => new URL(base + p, site).href;
  const posts = (await getAiNews()).slice(0, 50);
  const items = posts.map((p) => `    <item>\n      <title>${esc(p.data.title)}</title>\n      <link>${abs(`/blog/${p.id}/`)}</link>\n      <guid isPermaLink="true">${abs(`/blog/${p.id}/`)}</guid>\n      <pubDate>${p.data.pubDate.toUTCString()}</pubDate>\n      <description>${esc(p.data.description)}</description>\n    </item>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>AI Tools Optimizer: AI News</title>\n    <link>${abs('/ai-news/')}</link>\n    <atom:link href="${abs('/ai-news/rss.xml')}" rel="self" type="application/rss+xml" />\n    <description>Daily AI news roundups from AI Tools Optimizer.</description>\n    <language>en-us</language>\n${posts.length ? `    <lastBuildDate>${posts[0].data.pubDate.toUTCString()}</lastBuildDate>\n` : ''}${items}${items ? '\n' : ''}  </channel>\n</rss>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
