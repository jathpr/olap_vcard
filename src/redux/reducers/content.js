import { ADD_RAW_DATA, DATA_FAILED, DATA_LOADING, TRANSLATE_DATA } from '../actionTypes'

const initialState = { rawData: null, dataLoading: false, data: null }

const content = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RAW_DATA: {
      return {
        ...state,
        rawData: action.payload,
        dataLoading: false,
      }
    }
    case DATA_LOADING: {
      return {
        ...state,
        rawData: null,
        dataLoading: true,
      }
    }
    case DATA_FAILED: {
      return {
        ...state,
        rawData: action.payload,
        dataLoading: false,
      }
    }
    case TRANSLATE_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default content
