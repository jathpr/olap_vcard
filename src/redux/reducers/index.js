import { combineReducers } from 'redux'
import player from './player'
import language from './language'
import content from './content'

export default combineReducers({ player, language, content })
