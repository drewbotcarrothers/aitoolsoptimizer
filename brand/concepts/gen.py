D='''<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00E5FF"/><stop offset=".6" stop-color="#8B5CF6"/><stop offset="1" stop-color="#FF3DCE"/></linearGradient>
<radialGradient id="rg"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".3"/><stop offset="1" stop-color="#070A13" stop-opacity="0"/></radialGradient>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'''
grid='<g stroke="#232B4D" stroke-width="1.5" opacity=".6">'+"".join(f'<line x1="{x}" y1="0" x2="{x}" y2="800"/><line x1="0" y1="{x}" x2="800" y2="{x}"/>' for x in range(0,801,50))+'</g>'
def svg(b): return f'<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">{D}<rect width="800" height="800" fill="#070A13"/>{grid}<circle cx="400" cy="400" r="360" fill="url(#rg)"/><g filter="url(#glow)">{b}</g></svg>'
G='#7CFFB2'
# 1 chip-head hammer
pins="".join(f'<rect x="{x}" y="168" width="18" height="34" rx="5" fill="url(#g)"/><rect x="{x}" y="338" width="18" height="34" rx="5" fill="url(#g)"/>' for x in range(250,560,50))
c1=f'''{pins}<rect x="200" y="200" width="400" height="140" rx="26" fill="#0E1324" stroke="url(#g)" stroke-width="20"/>
<rect x="355" y="230" width="90" height="80" rx="12" fill="none" stroke="{G}" stroke-width="10"/><circle cx="400" cy="270" r="14" fill="{G}"/>
<path d="M355 270 H250 M445 270 H550" stroke="{G}" stroke-width="8" stroke-linecap="round"/><circle cx="250" cy="270" r="11" fill="{G}"/><circle cx="550" cy="270" r="11" fill="{G}"/>
<rect x="368" y="350" width="64" height="300" rx="20" fill="url(#g)"/><rect x="368" y="560" width="64" height="90" rx="20" fill="#0E1324" stroke="url(#g)" stroke-width="10"/>'''
# 2 AI with hammer I
c2=f'''<text x="345" y="555" text-anchor="middle" font-family="Orbitron" font-weight="900" font-size="330" fill="url(#g)">A</text>
<rect x="470" y="300" width="190" height="80" rx="16" fill="url(#g)"/><rect x="470" y="300" width="40" height="80" rx="10" fill="#FF3DCE"/>
<rect x="535" y="380" width="60" height="175" rx="14" fill="url(#g)"/>
<path d="M600 270 l18 -40 M640 280 l34 -30 M565 270 l-6 -40" stroke="{G}" stroke-width="10" stroke-linecap="round"/>'''
# 3 tilted hammer w/ circuit handle
c3=f'''<g transform="rotate(-40 400 400)"><rect x="220" y="170" width="360" height="130" rx="24" fill="url(#g)"/><rect x="530" y="170" width="50" height="130" rx="18" fill="#FF3DCE"/>
<rect x="355" y="300" width="90" height="360" rx="26" fill="#0E1324" stroke="url(#g)" stroke-width="16"/>
<path d="M400 320 V420 L380 440 V500 M400 420 L420 440 V560 L400 580 V630" stroke="{G}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="380" cy="500" r="11" fill="{G}"/><circle cx="420" cy="540" r="11" fill="{G}"/><circle cx="400" cy="630" r="11" fill="{G}"/><circle cx="400" cy="235" r="26" fill="#070A13"/><circle cx="400" cy="235" r="12" fill="{G}"/></g>'''
# 4 hammer striking spark network
nodes=[(520,520),(640,470),(600,620),(470,650),(680,580)]
edges=[(0,1),(0,2),(0,3),(1,4),(2,4),(2,3)]
net="".join(f'<line x1="{nodes[a][0]}" y1="{nodes[a][1]}" x2="{nodes[b][0]}" y2="{nodes[b][1]}" stroke="{G}" stroke-width="7"/>' for a,b in edges)+"".join(f'<circle cx="{x}" cy="{y}" r="{22 if i==0 else 15}" fill="{G if i==0 else "#070A13"}" stroke="{G}" stroke-width="7"/>' for i,(x,y) in enumerate(nodes))
c4=f'''<g transform="rotate(-35 330 330)"><rect x="180" y="170" width="300" height="115" rx="22" fill="url(#g)"/><rect x="295" y="285" width="70" height="340" rx="22" fill="url(#g)"/></g>
{net}<path d="M520 520 l-60 -10 M520 520 l-10 -60 M520 520 l-50 -45" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" opacity=".9"/>'''
for i,c in enumerate([c1,c2,c3,c4],1): open(f"hammer-{i}.svg","w").write(svg(c))
