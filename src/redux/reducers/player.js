import {
  TOGGLE_PLAYER,
  PLAYER_SET_TRACK,
  PLAYER_PLAY_PAUSE,
  VIDEO_PLAY_PAUSE,
  VIDEO_SET_TRACK,
} from '../actionTypes'

const initialState = {
  isPlayerVisible: false,
  currentTrack: 1,
  isPlaying: false,
  isVideoPlaying: false,
  currentVideo: 0,
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER: {
      if ('newState' in action.payload)
        return {
          ...state,
          isPlayerVisible: action.payload.newState,
          isPlaying: action.payload.newState,
          isVideoPlaying: state.isVideoPlaying && !action.payload.newState,
        }
      return {
        ...state,
        isPlayerVisible: !state.isPlayerVisible,
        isPlaying: !state.isPlayerVisible,
        isVideoPlaying: state.isVideoPlaying && !state.isPlayerVisible,
      }
    }
    case PLAYER_SET_TRACK: {
      return {
        ...state,
        isPlayerVisible: true,
        isPlaying: true,
        currentTrack: action.payload,
        isVideoPlaying: false,
      }
    }
    case VIDEO_SET_TRACK: {
      return {
        ...state,
        isPlaying: false,
        currentVideo: action.payload,
        isVideoPlaying: true,
      }
    }
    case PLAYER_PLAY_PAUSE: {
      return {
        ...state,
        isPlaying: action.payload,
        isVideoPlaying: false,
      }
    }
    case VIDEO_PLAY_PAUSE: {
      return {
        ...state,
        isVideoPlaying: action.payload,
        isPlaying: false,
      }
    }
    default: {
      return state
    }
  }
}

export default player
