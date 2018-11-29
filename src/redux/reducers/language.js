import { CHANGE_LANGUAGE } from '../actionTypes'
import { USER_LANG } from '../../utils/getLocale'

const initialState = 'en-US'

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      localStorage.setItem(USER_LANG, action.payload)
      return action.payload
    }
    default:
      return state
  }
}
