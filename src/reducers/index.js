
import { combineReducers } from 'redux'
import user from './user'
import boards from './boards'

const rootReducer = combineReducers({
  user,
  boards,
})

export default rootReducer