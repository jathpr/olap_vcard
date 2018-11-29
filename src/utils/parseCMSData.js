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

export default function parse(data) {
  let cHeader
  let cHome
  let cPlayer
  let footer
  let cBio
  let cContacts
  let cConcert
  let cFilm
  const cProject = []
  const cNews = []

  data.items.forEach(entry => {
    if (entry.sys.id === CLASS_HEADER) {
      cHeader = entry.fields
    }
    if (entry.sys.id === CLASS_HOME) {
      cHome = entry.fields
    }
    if (entry.sys.id === CLASS_PLAYER) {
      cPlayer = entry.fields
    }
    if (entry.sys.id === CLASS_FOOTER) {
      footer = entry.fields
    }
    if (entry.sys.id === CLASS_BIO) {
      cBio = entry.fields
    }
    if (entry.sys.id === CLASS_CONTACTS) {
      cContacts = entry.fields
    }
    if (entry.sys.contentType.sys.id === CLASS_PROJECTS) {
      cProject.push({ ...entry.fields, ...{ id: entry.sys.id } })
    }
    if (entry.sys.contentType.sys.id === CLASS_ARTICLES) {
      cNews.push({
        ...entry.fields,
        ...{ id: entry.sys.id },
        ...{ createdAt: entry.sys.createdAt },
      })
    }
    if (entry.sys.id === CLASS_MUSIC_CONCERT) {
      cConcert = entry.fields
    }
    if (entry.sys.id === CLASS_MUSIC_FILM) {
      cFilm = entry.fields
    }
  })

  const cAllMusic = []
  data.includes.Asset.forEach(entry => {
    if (entry.fields.file.contentType.startsWith('audio')) cAllMusic.push(entry.fields)
  })

  return {
    cHeader,
    cHome,
    cPlayer,
    footer,
    cBio,
    cContacts,
    cProject,
    cConcert,
    cFilm,
    cNews,
    cAllMusic,
  }
}
