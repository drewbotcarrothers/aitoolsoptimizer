/** Turn ```mermaid fences into raw HTML before Shiki sees them. */
export function remarkMermaid() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === 'code' && child.lang === 'mermaid') {
      const escaped = String(child.value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      node.children[i] = {
        type: 'html',
        value: `<pre class="mermaid">${escaped}</pre>`,
      };
    } else {
      walk(child);
    }
  }
}
