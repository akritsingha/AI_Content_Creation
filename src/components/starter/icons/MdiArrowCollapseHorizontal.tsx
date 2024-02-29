import type { QwikIntrinsicElements } from '@builder.io/qwik'

export function MdiArrowCollapseHorizontal(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M13 20V4h2.03v16zm-3 0V4h2.03v16zM5 8l4.03 4L5 16v-3H2v-2h3zm15 8l-4-4l4-4v3h3v2h-3z"></path></svg>
  )
}
export default MdiArrowCollapseHorizontal