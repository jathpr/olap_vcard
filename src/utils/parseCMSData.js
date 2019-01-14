const CLASS_HEADER = '1ToqbomTMAwKgWyKmYEMuO'
const CLASS_HOME = '6urjXMranKKMyiMCssgMGM'
const CLASS_PLAYER = 'GjiZ5yg5SmAQSwOuYoUqg'
const CLASS_FOOTER = '3Qo6uU5BmgwCG0ssUKSMQs'
const CLASS_BIO = '6hsNG0ysGAqcoOceSAswC2'
const CLASS_CONTACTS = '2kCacjZlC0soym8cWqEKwo'
const CLASS_PROJECTS = 'project'
const CLASS_DATA = '6to3c5Di0MIWyguMceiSSw'
const CLASS_ARTICLES = 'article'
const CLASS_SONGS = 'song'
const CLASS_VIDEO = 'video'
const CLASS_MUSIC_TYPE = 'musicType'

export default function parse(data) {
  let cHeader
  let cHome
  let cPlayer
  let footer
  let cBio
  let cContacts
  let cData
  const cVideo = []
  const cSongs = []
  const cMusicTypes = []
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
    if (entry.sys.id === CLASS_DATA) {
      cData = entry.fields
    }
    if (entry.sys.contentType.sys.id === CLASS_PROJECTS) {
      cProject.push({ ...entry.fields, ...{ id: entry.sys.id } })
    }
    if (entry.sys.contentType.sys.id === CLASS_VIDEO) {
      cVideo.push({
        ...entry.fields,
        ...{ id: entry.sys.id },
      })
    }
    if (entry.sys.contentType.sys.id === CLASS_SONGS) {
      cSongs.push({
        ...entry.fields,
        ...{ id: entry.sys.id },
      })
    }
    if (entry.sys.contentType.sys.id === CLASS_MUSIC_TYPE) {
      cMusicTypes.push({
        ...entry.fields,
        ...{ id: entry.sys.id },
      })
    }
    if (entry.sys.contentType.sys.id === CLASS_ARTICLES) {
      cNews.push({
        ...entry.fields,
        ...{ id: entry.sys.id },
        ...{ createdAt: entry.sys.createdAt },
      })
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
    cNews,
    cAllMusic,
    cData,
    cVideo,
    cSongs,
    cMusicTypes,
  }
}
