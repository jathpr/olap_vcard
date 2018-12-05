import { TOGGLE_PLAYER, PLAYER_SET_TRACK, PLAYER_PLAY_PAUSE } from '../actionTypes'

const initialState = { isPlayerVisible: false, currentTrack: 1, isPlaying: false }

const player = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER: {
      if ('newState' in action.payload)
        return {
          ...state,
          isPlayerVisible: action.payload.newState,
          isPlaying: action.payload.newState,
        }
      return {
        ...state,
        isPlayerVisible: !state.isPlayerVisible,
        isPlaying: !state.isPlayerVisible,
      }
    }
    case PLAYER_SET_TRACK: {
      return {
        ...state,
        isPlayerVisible: true,
        isPlaying: true,
        currentTrack: action.payload,
      }
    }
    case PLAYER_PLAY_PAUSE: {
      return {
        ...state,
        isPlaying: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default player
