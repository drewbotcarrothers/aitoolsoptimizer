import math
G='''<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00E5FF"/><stop offset=".6" stop-color="#8B5CF6"/><stop offset="1" stop-color="#FF3DCE"/></linearGradient>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'''
def hexpts(cx,cy,r):
    return " ".join(f"{cx+r*math.cos(math.radians(60*i-90)):.1f},{cy+r*math.sin(math.radians(60*i-90)):.1f}" for i in range(6))
def mark(cx,cy,s):  # s = scale, mark fits ~ radius 260*s
    k=lambda v:v*s
    nodes=[(-1,-1),(1,-1),(-1,1),(1,1)]
    tr=""
    for i in range(6):
        a=math.radians(60*i-90); x1=cx+k(230)*math.cos(a); y1=cy+k(230)*math.sin(a); x2=cx+k(275)*math.cos(a); y2=cy+k(275)*math.sin(a)
        tr+=f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="url(#g)" stroke-width="{k(12)}" stroke-linecap="round"/><circle cx="{x2:.1f}" cy="{y2:.1f}" r="{k(16)}" fill="#070A13" stroke="url(#g)" stroke-width="{k(9)}"/>'
    return f'''<g filter="url(#glow)">{tr}
<polygon points="{hexpts(cx,cy,k(225))}" fill="#0E1324" stroke="url(#g)" stroke-width="{k(22)}" stroke-linejoin="round"/>
<text x="{cx}" y="{cy+k(52)}" text-anchor="middle" font-family="Orbitron" font-weight="900" font-size="{k(170)}" fill="url(#g)" letter-spacing="{k(4)}">AI</text>
<path d="M{cx+k(120)} {cy-k(130)} l{k(-26)} {k(44)} h{k(24)} l{k(-22)} {k(42)}" fill="none" stroke="#7CFFB2" stroke-width="{k(9)}" stroke-linecap="round" stroke-linejoin="round"/>
</g>'''
def grid(w,h,step,op):
    l="".join(f'<line x1="{x}" y1="0" x2="{x}" y2="{h}"/>' for x in range(0,w+1,step))+"".join(f'<line x1="0" y1="{y}" x2="{w}" y2="{y}"/>' for y in range(0,h+1,step))
    return f'<g stroke="#232B4D" stroke-width="1.5" opacity="{op}">{l}</g>'
def svg(w,h,body): return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}"><defs>{G}<radialGradient id="rg"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".35"/><stop offset="1" stop-color="#070A13" stop-opacity="0"/></radialGradient></defs>{body}</svg>'
open("logo-icon.svg","w").write(svg(800,800,f'<rect width="800" height="800" fill="#070A13"/>{grid(800,800,50,.6)}<circle cx="400" cy="400" r="380" fill="url(#rg)"/>{mark(400,400,1.15)}'))
open("logo-icon-transparent.svg","w").write(svg(800,800,mark(400,400,1.3)))
W,H=2560,1440
banner=f'''<rect width="{W}" height="{H}" fill="#070A13"/>{grid(W,H,64,.7)}
<ellipse cx="400" cy="300" rx="700" ry="500" fill="url(#rg)"/><ellipse cx="2200" cy="1150" rx="800" ry="500" fill="url(#rg)"/>
<rect x="0" y="{H/2-260}" width="{W}" height="3" fill="url(#g)" opacity=".35"/><rect x="0" y="{H/2+260}" width="{W}" height="3" fill="url(#g)" opacity=".35"/>
{mark(700,720,0.55)}
<text x="860" y="700" font-family="Orbitron" font-weight="900" font-size="92" fill="#E6ECFF" filter="url(#glow)">AI TOOLS <tspan fill="url(#g)">OPTIMIZER</tspan></text>
<text x="864" y="780" font-family="Inter" font-weight="500" font-size="44" fill="#8A94B8">Learn AI. Pick the right tools. Work smarter.</text>
<text x="864" y="840" font-family="Inter" font-weight="600" font-size="32" fill="#00E5FF">aitoolsoptimizer.com  ·  @aitoolsoptimizer</text>'''
open("youtube-banner.svg","w").write(svg(W,H,banner))
