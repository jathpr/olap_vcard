import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

function parse(data) {
  if (data) return { __html: documentToHtmlString(data) }
  return { __html: '' }
}

export default parse
