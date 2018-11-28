import { TOGGLE_PLAYER } from '../actionTypes'

const initialState = { isPlayerVisible: false }

const player = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER: {
      if ('newState' in action.payload)
        return {
          ...state,
          isPlayerVisible: action.payload.newState,
        }
      return {
        ...state,
        isPlayerVisible: !state.isPlayerVisible,
      }
    }
    default: {
      return state
    }
  }
}

export default player
