import { Root } from 'mdast'
import visit from 'unist-util-visit'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

module.exports = ({ markdownAST }: { markdownAST: Root }) => {
  visit(markdownAST, (node: any, index, parent: any) => {
    if (node.type !== 'code' || node.lang !== 'mermaid') return
    if (!parent || !Array.isArray(parent.children)) return

    parent.children[index] = {
      type: 'html',
      value: `<pre class="mermaid">${escapeHtml(node.value)}</pre>`,
    }
  })
}
