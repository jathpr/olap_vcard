// @flow

type Props = {
  src: string,
  label: string,
  id: string,
  hosting: string,
}

const youtube = 'Youtube'

const getLink = ({ src, hosting }: Props) => {
  if (hosting === youtube) {
    const splitedLink = src.split('/')
    const videoCode = splitedLink[splitedLink.indexOf('embed') + 1]
    return `https://img.youtube.com/vi/${videoCode}/mqdefault.jpg`
  }
  return null
}

export default getLink
