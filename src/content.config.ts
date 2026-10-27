import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'audio-voice-music', 'automation-agents', 'chatbots-assistants', 'coding', 'customer-support', 'data-analytics',
  'design', 'education', 'image-generation', 'marketing-seo', 'meetings-transcription', 'presentations',
  'productivity-notes', 'research-search', 'sales', 'video', 'writing',
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
    // Root-relative override. Omit it and add public/images/blog/{id}.webp instead.
    featuredImage: z.string().regex(/^\/(?!.*\.\.)[A-Za-z0-9._/-]+$/).optional(),
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
    logo: z.string().optional(),
    affiliateUrl: z.string().url().optional(),
    rating: z.number().min(0).max(5).optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    tips: z.array(z.string()).default([]),
    useCases: z.array(z.string()).default([]),
    company: z.string().optional(),
    subcategory: z.string().optional(),
    bestFor: z.string().optional(),
    pricingModel: z.string().optional(),
    startingPrice: z.string().optional(),
    freePlan: z.string().optional(),
    keyFeatures: z.array(z.string()).default([]),
    sourceUrls: z.array(z.string().url()).default([]),
    lastVerified: z.coerce.date().optional(),
    alternatives: z.array(z.string()).default([]),
    lastUpdated: z.coerce.date(),
    sample: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    verdict: z.string().optional(),
    takeaways: z.array(z.string()).default([]),
    platforms: z.string().optional(),
    idealFor: z.array(z.string()).default([]),
    notFor: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { blog, tools };
