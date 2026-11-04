/**
 * Wraps each Markdown table in a focusable, named scroll region so keyboard
 * users can scroll wide tables (WCAG 2.1.1). The name comes from the nearest
 * preceding heading.
 *
 * @returns {(tree: import('hast').Root) => void}
 */
export default function rehypeTableRegion() {
  return (tree) => wrapTables(tree, { heading: '' });
}

/** @param {import('hast').Parent} parent @param {{ heading: string }} ctx */
function wrapTables(parent, ctx) {
  const children = parent.children ?? [];
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    if (node.type !== 'element') continue;
    if (/^h[1-6]$/.test(node.tagName)) {
      ctx.heading = textOf(node).trim();
      continue;
    }
    if (node.tagName === 'table') {
      children[i] = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['sb-table-region'],
          tabIndex: 0,
          role: 'region',
          ariaLabel: ctx.heading ? `Table: ${ctx.heading}` : 'Table',
        },
        children: [node],
      };
      continue;
    }
    wrapTables(node, ctx);
  }
}

/** @param {import('hast').Nodes} node @returns {string} */
function textOf(node) {
  if (node.type === 'text') return node.value;
  if ('children' in node) return node.children.map(textOf).join('');
  return '';
}
