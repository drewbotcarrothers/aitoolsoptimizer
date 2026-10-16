import fs from 'node:fs'; import sharp from 'sharp';
const dir='src/content/tools'; const UA={'user-agent':'Mozilla/5.0 (X11; Linux x86_64) Chrome/126 Safari/537.36'};
const get=async(u,t=12000)=>{try{const r=await fetch(u,{headers:UA,redirect:'follow',signal:AbortSignal.timeout(t)});if(!r.ok)return null;return {buf:Buffer.from(await r.arrayBuffer()),type:r.headers.get('content-type')||'',url:r.url};}catch{return null}};
const res={};
async function norm(buf){const img=sharp(buf,{density:300});const m=await img.metadata();if(!m.width)throw 0;
 return {png:await sharp(buf,{density:300}).resize(128,128,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toBuffer(),w:m.width};}
async function one(slug,site){
 const origin=new URL(site).origin; const cands=[];
 const h=await get(site); if(h){const html=h.buf.toString('utf8');
  for(const m of html.matchAll(/<link[^>]+>/gi)){const t=m[0];const rel=(t.match(/rel=["']([^"']+)/i)||[])[1]||'';const href=(t.match(/href=["']([^"']+)/i)||[])[1];
   if(!href||!/icon/i.test(rel)||/mask-icon/i.test(rel))continue;const s=parseInt((t.match(/sizes=["'](\d+)/i)||[])[1]||(/apple/i.test(rel)?180:/\.svg/i.test(href)?512:16));
   try{cands.push({u:new URL(href.replace(/&amp;/g,'&'),h.url).href,s});}catch{}}}
 cands.push({u:origin+'/apple-touch-icon.png',s:180});
 cands.sort((a,b)=>b.s-a.s);
 for(const c of cands){const r=await get(c.u);if(!r||/text\/html/.test(r.type))continue;try{const n=await norm(r.buf);if(n.w>=64||/svg/.test(r.type+c.u)){return {...n,src:c.u};}}catch{}}
 const g=await get(`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(origin)}&size=128`);
 if(g){try{const n=await norm(g.buf);return {...n,src:'google-t2'};}catch{}}
 for(const c of cands){const r=await get(c.u);if(!r||/text\/html/.test(r.type))continue;try{return {...(await norm(r.buf)),src:c.u+' (small)'};}catch{}}
 return null;}
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.md'));
await Promise.all(files.map(async f=>{const slug=f.replace('.md','');const site=fs.readFileSync(`${dir}/${f}`,'utf8').match(/^website:\s*"?([^"\n]+)/m)[1];
 const r=await one(slug,site); if(r){fs.writeFileSync(`public/logos/${slug}.png`,r.png);res[slug]={src:r.src,w:r.w};}else res[slug]=null;}));
fs.writeFileSync('scripts/logo-sources.json',JSON.stringify(res,null,1));
console.log('ok',Object.values(res).filter(Boolean).length,'fail',Object.entries(res).filter(([,v])=>!v).map(([k])=>k));
