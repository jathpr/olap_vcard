import {
  TOGGLE_PLAYER,
  PLAYER_SET_TRACK,
  PLAYER_PLAY_PAUSE,
  VIDEO_PLAY_PAUSE,
  VIDEO_SET_TRACK,
} from '../actionTypes'

const initialState = {
  isPlayerVisible: false,
  currentTrack: 0,
  isPlaying: false,
  isVideoPlaying: false,
  isInnerState: false,
  isVideoInnerState: false,
  currentVideo: 0,
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER: {
      let newValue
      if ('newState' in action.payload) newValue = action.payload.newState
      else newValue = !state.isPlayerVisible
      return {
        ...state,
        isPlayerVisible: newValue,
        isPlaying: newValue,
        isInnerState: false,
        isVideoPlaying: newValue ? false : state.isVideoPlaying,
        isVideoInnerState: newValue ? false : state.isVideoPlaying,
      }
    }
    case PLAYER_SET_TRACK: {
      return {
        ...state,
        isPlayerVisible: true,
        isPlaying: action.payload.isInnerState ? state.isPlaying : true,
        isInnerState: action.payload.isInnerState,
        currentTrack: action.payload.track,
        isVideoPlaying: false,
        isVideoInnerState: false,
      }
    }
    case VIDEO_SET_TRACK: {
      return {
        ...state,
        isPlaying: false,
        currentVideo: action.payload.track,
        isVideoPlaying: action.payload.isInnerState ? state.isVideoPlaying : true,
        isVideoInnerState: action.payload.isInnerState,
        isInnerState: false,
      }
    }
    case PLAYER_PLAY_PAUSE: {
      return {
        ...state,
        isPlaying: action.payload.isPlay,
        isInnerState: action.payload.isInnerState,
        isVideoPlaying: action.payload.isPlay ? false : state.isVideoPlaying,
        isVideoInnerState: false,
      }
    }
    case VIDEO_PLAY_PAUSE: {
      return {
        ...state,
        isVideoPlaying: action.payload.isPlay,
        isPlaying: action.payload.isPlay ? false : state.isPlaying,
        isInnerState: false,
        isVideoInnerState: action.payload.isInnerState,
      }
    }
    default: {
      return state
    }
  }
}

export default player
