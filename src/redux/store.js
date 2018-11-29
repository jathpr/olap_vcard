import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import getLocale from '../utils/getLocale'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const preloadedState = { language: getLocale() }

export default createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))
