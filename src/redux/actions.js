import * as contentful from 'contentful'
import {
  CHANGE_LANGUAGE,
  TOGGLE_PLAYER,
  DATA_LOADING,
  DATA_FAILED,
  TRANSLATE_DATA,
  ADD_RAW_DATA,
  PLAYER_SET_TRACK,
  PLAYER_PLAY_PAUSE,
} from './actionTypes'
import parse from '../utils/parseCMSData'
import setLang from '../utils/i18n'

const SYNC_TOKEN = 'contentfulSyncToken'
const SYNC_DATA = 'contentfulEntyres'
const SYNC_ASSETS = 'contentfulAssets'
const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
})

const setLanguage = lang => ({
  type: CHANGE_LANGUAGE,
  payload: lang,
})

const translateData = (lang, rawData) => {
  const { entries, assets } = rawData
  const langPar = setLang(entries, assets, lang)
  const resolveLinks = client.parseEntries(langPar)
  const data = parse(resolveLinks)

  return {
    type: TRANSLATE_DATA,
    payload: data,
  }
}

export const changeLanguage = lang => (dispatch, getState) => {
  if (getState().language === lang) return
  dispatch(setLanguage(lang))
  dispatch(translateData(lang, getState().content.rawData))
}

export const togglePlayer = newState => ({
  type: TOGGLE_PLAYER,
  payload: { newState },
})

export const setTrack = track => ({
  type: PLAYER_SET_TRACK,
  payload: track,
})

export const playPause = isPlay => ({
  type: PLAYER_PLAY_PAUSE,
  payload: isPlay,
})

const dataLoading = () => ({
  type: DATA_LOADING,
})

const dataFailed = errmess => ({
  type: DATA_FAILED,
  payload: errmess,
})

const addRowData = data => ({
  type: ADD_RAW_DATA,
  payload: data,
})

const fetchContent = () => (dispatch, getState) => {
  dispatch(dataLoading(true))
  return client
    .sync({ initial: true, resolveLinks: false })
    .then(response => {
      const { entries, assets } = JSON.parse(response.stringifySafe())
      localStorage.setItem(SYNC_TOKEN, response.nextSyncToken)
      localStorage.setItem(SYNC_DATA, JSON.stringify(entries))
      localStorage.setItem(SYNC_ASSETS, JSON.stringify(assets))
      return { entries, assets }
    })
    .then(data => {
      dispatch(translateData(getState().language, data))
      dispatch(addRowData(data))
    })
    .catch(error => dispatch(dataFailed(error)))
}

export const getContent = () => async (dispatch, getState) => {
  const syncToken = localStorage.getItem(SYNC_TOKEN)
  const syncData = localStorage.getItem(SYNC_DATA)
  const syncAssets = localStorage.getItem(SYNC_ASSETS)
  const isInitial = !(syncToken && syncData && syncAssets)

  if (isInitial) {
    dispatch(fetchContent())
    return
  }

  const data = {}
  data.entries = JSON.parse(syncData)
  data.assets = JSON.parse(syncAssets)
  dispatch(translateData(getState().language, data))
  dispatch(addRowData(data))
  const responseData = await client.sync({ nextSyncToken: syncToken })
  const { assets, entries, deletedAssets, deletedEntries } = responseData
  if (entries.length + deletedEntries.length + assets.length + deletedAssets.length > 0) {
    dispatch(fetchContent())
  }
}

export const selectTrack = title => (dispatch, getState) => {
  const trackNumber = getState().content.data.cAllMusic.findIndex(song => title === song.title)
  dispatch(setTrack(trackNumber))
}
