import { CHANGE_LANGUAGE } from '../actionTypes'

const initialState = 'en-US'

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return action.payload
    }
    default:
      return state
  }
}
