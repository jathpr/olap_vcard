import { RESP_TOGGLE_MENU } from '../actionTypes'

const initialState = { showMenu: false }

export default function(state = initialState, action) {
  switch (action.type) {
    case RESP_TOGGLE_MENU: {
      if (action.payload.newState)
        return {
          ...state,
          showMenu: action.payload.newState,
        }
      return {
        ...state,
        showMenu: !state.showMenu,
      }
    }
    default:
      return state
  }
}
