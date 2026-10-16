import { getCollection } from 'astro:content';
export const AI_NEWS_TAG = 'ai-news';
/** Published blog posts tagged `ai-news`, newest first. */
export const getAiNews = async () =>
  (await getCollection('blog', (p) => !p.data.draft && !p.data.sample && p.data.tags.includes(AI_NEWS_TAG)))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
