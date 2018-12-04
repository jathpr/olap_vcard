// @flow

export default function dateToLocale(date: string, locale: string) {
  const dateOptions = {
    // weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
  }
  const dateInst = new Date(date)
  return dateInst.toLocaleString(locale, dateOptions)
}
