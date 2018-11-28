import * as contentful from 'contentful'
import {
  CHANGE_LANGUAGE,
  TOGGLE_PLAYER,
  DATA_LOADING,
  DATA_FAILED,
  TRANSLATE_DATA,
  ADD_RAW_DATA,
} from './actionTypes'
import parse from '../Components/Utils/parseCMSData'
import setLang from '../Components/Utils/i18n'

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

export const fetchContent = () => (dispatch, getState) => {
  dispatch(dataLoading(true))

  const syncToken = localStorage.getItem(SYNC_TOKEN)
  const syncData = localStorage.getItem(SYNC_DATA)
  const syncAssets = localStorage.getItem(SYNC_ASSETS)
  const isInitial = !(false && syncToken && syncData && syncAssets)

  return (isInitial
    ? client.sync({ initial: true, resolveLinks: false })
    : client.sync({ nextSyncToken: syncToken })
  )
    .then(response => {
      if (isInitial) {
        const { entries, assets } = JSON.parse(response.stringifySafe())
        localStorage.setItem(SYNC_TOKEN, response.nextSyncToken)
        localStorage.setItem(SYNC_DATA, JSON.stringify(entries))
        localStorage.setItem(SYNC_ASSETS, JSON.stringify(assets))
        return { entries, assets }
      }
      const { entries, assets, deletedEntries, nextSyncToken } = response
      const newData = JSON.parse(syncData)
      if (entries.length > 0) {
        localStorage.setItem(SYNC_DATA, newData)
      }
      if (deletedEntries.length > 0) {
        localStorage.setItem(SYNC_DATA, newData)
      }
      localStorage.setItem(SYNC_TOKEN, nextSyncToken)
      return parse(newData, JSON.parse(assets))
    })
    .then(data => {
      dispatch(translateData(getState().language, data))
      dispatch(addRowData(data))
    })
    .catch(error => dispatch(dataFailed(error)))
}
