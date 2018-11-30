import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

function parse(data) {
  return { __html: documentToHtmlString(data) }
}

export default parse
