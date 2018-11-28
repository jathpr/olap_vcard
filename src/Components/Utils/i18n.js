const defLang = process.env.REACT_APP_DEF_LANG
const secondLang = process.env.REACT_APP_SECOND_LANG

function translate(data, lang) {
  const localizedData = {}
  const sLang = lang === defLang ? secondLang : defLang

  Object.keys(data).forEach(key => {
    localizedData[key] = data[key][lang] || data[key][sLang] || ''
  })

  return localizedData
}

export default function setLang(entries, assets, language) {
  const items = entries.map(entry => ({ ...entry, fields: translate(entry.fields, language) }))
  const Asset = assets.map(asset => ({ ...asset, fields: translate(asset.fields, language) }))

  return { items, includes: { Asset } }
}
