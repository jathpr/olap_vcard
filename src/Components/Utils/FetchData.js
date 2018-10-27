import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
})

const IMG_MAIN = '2XzkUnn5mgq4UIAaseSY4o'
const CLASS_HEADER = '1ToqbomTMAwKgWyKmYEMuO'
const CLASS_HOME = '6urjXMranKKMyiMCssgMGM'
const CLASS_PLAYER = 'GjiZ5yg5SmAQSwOuYoUqg'
const CLASS_FOOTER = '3Qo6uU5BmgwCG0ssUKSMQs'
const CLASS_BIO = '6hsNG0ysGAqcoOceSAswC2'
const CLASS_CONTACTS = '2kCacjZlC0soym8cWqEKwo'
const CLASS_PROJECTS = 'project'
const CLASS_MUSIC_CONCERT = '3Z3hzACNocwS8aIgeUeKci'
const CLASS_MUSIC_FILM = '63naUalNwAU606mUSciaAy'
const CLASS_ARTICLES = 'article'

export function fetchData(lang) {
  return client.getEntries({ locale: lang }).then(response => {
    let navi
    let main
    let player
    let footer
    let bio
    let contacts
    let mConcert
    let mFilm
    const projects = []

    const news = { locale: lang, articles: [] }
    response.items.forEach(entry => {
      if (entry.sys.id === CLASS_HEADER) {
        navi = entry.fields
      }
      if (entry.sys.id === CLASS_HOME) {
        main = entry.fields
      }
      if (entry.sys.id === CLASS_PLAYER) {
        player = entry.fields
      }
      if (entry.sys.id === CLASS_FOOTER) {
        footer = entry.fields
      }
      if (entry.sys.id === CLASS_BIO) {
        bio = entry.fields
      }
      if (entry.sys.id === CLASS_CONTACTS) {
        contacts = entry.fields
      }
      if (entry.sys.contentType.sys.id === CLASS_PROJECTS) {
        projects.push({ ...entry.fields, ...{ id: entry.sys.id } })
      }
      if (entry.sys.contentType.sys.id === CLASS_ARTICLES) {
        news.articles.push({
          ...entry.fields,
          ...{ id: entry.sys.id },
          ...{ createdAt: entry.sys.createdAt },
        })
      }
      if (entry.sys.id === CLASS_MUSIC_CONCERT) {
        mConcert = entry.fields
      }
      if (entry.sys.id === CLASS_MUSIC_FILM) {
        mFilm = entry.fields
      }
    })
    const music = []
    response.includes.Asset.forEach(entry => {
      if (entry.fields.file.contentType.startsWith('audio')) music.push(entry.fields)
    })

    return {
      navi,
      main,
      player,
      footer,
      bio,
      contacts,
      projects,
      mConcert,
      mFilm,
      news,
      lang,
      music,
    }
  })
}

export function fetchAssets(lang) {
  return client.getAssets({ locale: lang }).then(response => {
    let mainPhoto
    response.items.forEach(entry => {
      if (entry.sys.id === IMG_MAIN) {
        mainPhoto = entry.fields
      }
    })
    return mainPhoto
  })
}
