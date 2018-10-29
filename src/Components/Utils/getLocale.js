const getLocale = () => {
  let locale

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
