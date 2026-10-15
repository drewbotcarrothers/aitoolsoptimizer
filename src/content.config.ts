import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'writing', 'image-generation', 'video', 'audio-voice', 'coding', 'productivity',
  'research-search', 'chatbots-assistants', 'marketing', 'design', 'data-analytics', 'automation',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(CATEGORIES).optional(),
    tags: z.array(z.string()).default([]),
    relatedTools: z.array(z.string()).default([]),
    sample: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    tagline: z.string(),
    description: z.string(),
    pricing: z.enum(['free', 'freemium', 'paid']),
    website: z.string().url(),
    affiliateUrl: z.string().url().optional(),
    rating: z.number().min(0).max(5),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    tips: z.array(z.string()),
    useCases: z.array(z.string()),
    alternatives: z.array(z.string()).default([]),
    lastUpdated: z.coerce.date(),
    sample: z.boolean().default(false),
  }),
});

export const collections = { blog, tools };
