import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories } from '../data/categories';
import { getAiNews } from '../data/aiNews';
import { postModified } from '../lib/gitDates';

const day = (d?: Date) => (d ? d.toISOString().slice(0, 10) : undefined);
const max = (ds: (Date | undefined)[]) => ds.filter(Boolean).sort((a, b) => b!.valueOf() - a!.valueOf())[0];

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const tools = await getCollection('tools');
  const posts = await getCollection('blog', (p) => !p.data.draft);
  const news = await getAiNews();
  const postMod = new Map(posts.map((p) => [p.id, postModified(p.id, p.data.pubDate)]));
  const toolMod = new Map(tools.map((t) => [t.id, t.data.lastVerified ?? t.data.lastUpdated]));
  const latestPost = max([...postMod.values()]);
  const latestNews = max(news.map((p) => postMod.get(p.id)));
  const entries: [string, Date | undefined][] = [
    ['/', max([latestPost, ...toolMod.values()])], ['/tools/', max([...toolMod.values()])], ['/models/', undefined],
    ['/about/', undefined], ['/author/andrew/', latestPost], ['/methodology/', undefined], ['/contact/', undefined],
    ['/privacy/', undefined], ['/cookies/', undefined], ['/terms/', undefined], ['/disclaimer/', undefined],
    ...(posts.length ? [['/blog/', latestPost] as [string, Date | undefined]] : []),
    ...(news.length ? [['/ai-news/', latestNews] as [string, Date | undefined]] : []),
    ...Object.keys(categories).map((c) => [`/tools/category/${c}/`, max(tools.filter((t) => t.data.category === c).map((t) => toolMod.get(t.id)))] as [string, Date | undefined]),
    ...tools.map((t) => [`/tools/${t.id}/`, toolMod.get(t.id)] as [string, Date | undefined]),
    ...posts.map((p) => [`/blog/${p.id}/`, postMod.get(p.id)] as [string, Date | undefined]),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(([p, d]) => `  <url><loc>${new URL(base + p, site).href}</loc>${d ? `<lastmod>${day(d)}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
