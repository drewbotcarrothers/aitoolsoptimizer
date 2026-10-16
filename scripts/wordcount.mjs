// Counts visible words per tool page (main article) in dist/ and updates scripts/tool-content-progress.json
import fs from 'node:fs';
const dir = 'src/content/tools'; const prog = 'scripts/tool-content-progress.json';
const p = fs.existsSync(prog) ? JSON.parse(fs.readFileSync(prog, 'utf8')) : { tools: {} };
let tot = 0, n = 0;
for (const f of fs.readdirSync(dir).sort()) {
  const s = f.replace(/\.md$/, ''); const src = fs.readFileSync(`${dir}/${f}`, 'utf8');
  const html = fs.readFileSync(`dist/tools/${s}/index.html`, 'utf8');
  const art = (html.match(/<article[\s\S]*?<\/article>/) || [''])[0].replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<aside[\s\S]*?<\/aside>/, '').replace(/<details class="toc-mobile[\s\S]*?<\/details>/, '');
  const words = art.replace(/<[^>]+>/g, ' ').split(/\s+/).filter((w) => /\w/.test(w)).length;
  const done = /^verdict:/m.test(src);
  const sources = (src.match(/^  - title:/gm) || []).length;
  p.tools[s] = { ...(p.tools[s] || {}), status: done ? 'done' : 'pending', words, sources, lastChecked: (src.match(/lastVerified: "([^"]+)"/) || [])[1] };
  if (done) { tot += words; n++; }
}
p.summary = { done: n, total: Object.keys(p.tools).length, averageWords: n ? Math.round(tot / n) : 0, updated: new Date().toISOString() };
fs.writeFileSync(prog, JSON.stringify(p, null, 2) + '\n');
console.log(p.summary, Object.entries(p.tools).filter(([, v]) => v.status === 'done').map(([k, v]) => `${k}:${v.words}`).join(' '));
