// Last real content change per file, from git history (newest commit that touched the file and is not in
// src/data/git-dates-ignore.json). Falls back to undefined when git is unavailable.
import { execSync } from 'node:child_process';
import ignore from '../data/git-dates-ignore.json';

let cache: Map<string, Date> | undefined;
const ignored = Object.keys(ignore.commits);

function load(): Map<string, Date> {
  const map = new Map<string, Date>();
  try {
    const out = execSync('git log --format=@%H%x20%cI --name-only -- src/content', { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
    let skip = false; let date: Date | undefined;
    for (const line of out.split('\n')) {
      if (line.startsWith('@')) {
        const [sha, iso] = line.slice(1).split(' ');
        skip = ignored.some((s) => sha.startsWith(s));
        date = new Date(iso);
      } else if (line && !skip && date && !map.has(line)) {
        map.set(line, date);
      }
    }
  } catch { /* no git: no dates */ }
  return map;
}

/** Last substantive change for a content file path relative to the repo root, e.g. src/content/blog/foo.md. */
export function lastModified(path: string): Date | undefined {
  cache ??= load();
  return cache.get(path);
}

/** dateModified for a blog post: the later of pubDate and the last substantive git change. */
export function postModified(id: string, pubDate: Date): Date {
  const g = lastModified(`src/content/blog/${id}.md`);
  return g && g > pubDate ? g : pubDate;
}
