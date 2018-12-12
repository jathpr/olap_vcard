import { combineReducers } from 'redux'
import player from './player'
import language from './language'
import content from './content'
import responsive from './responsive'

export default combineReducers({ player, language, content, responsive })
