export const USER_LANG = 'USER_LANG'

const getLocale = () => {
  let locale

  const prevLang = localStorage.getItem(USER_LANG)
  if (prevLang) return prevLang

  if (navigator.languages && navigator.languages.length) {
    ;[locale] = navigator.languages
  } else if (navigator.userLanguage) {
    locale = navigator.userLanguage
  } else {
    locale = navigator.language
  }

  if (
    locale.indexOf('ru') >= 0 ||
    locale.indexOf('Ru') >= 0 ||
    locale.indexOf('RU') >= 0 ||
    locale.indexOf('be') === 0
  )
    return 'ru'
  return 'en-US'
}

export default getLocale
