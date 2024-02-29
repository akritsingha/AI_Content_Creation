import type { QwikIntrinsicElements } from '@builder.io/qwik'

export function MdiArrowCollapseAll(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="m19.5 3.09l1.41 1.41l-4.5 4.5H20v2h-7V4h2v3.59zm1.41 16.41l-1.41 1.41l-4.5-4.5V20h-2v-7h7v2h-3.59zM4.5 3.09L9 7.59V4h2v7H4V9h3.59l-4.5-4.5zM3.09 19.5l4.5-4.5H4v-2h7v7H9v-3.59l-4.5 4.5z"></path></svg>
  )
}
export default MdiArrowCollapseAll