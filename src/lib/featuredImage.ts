import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * Blog heroes live in `public/images/blog/{post id}.webp` (1280×720).
 * Drop a file to publish an image. Set `featuredImage` only to override that path.
 */
const IMAGE_DIR = path.join(process.cwd(), 'public', 'images', 'blog');

export function blogFeaturedImage(id: string, featuredImage?: string): string | undefined {
  const override = sitePath(featuredImage);
  if (override) return override;
  if (!isSafeId(id)) return undefined;
  const file = path.resolve(IMAGE_DIR, `${id}.webp`);
  const root = path.resolve(IMAGE_DIR) + path.sep;
  if (!file.startsWith(root)) return undefined;
  return existsSync(file) ? `/images/blog/${id}.webp` : undefined;
}

function sitePath(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed.startsWith('/') || trimmed.includes('..') || trimmed.includes('\\') || trimmed.includes('//')) return undefined;
  return trimmed;
}

function isSafeId(id: string): boolean {
  return Boolean(id) && !id.startsWith('/') && !id.includes('..') && !id.includes('\\');
}
