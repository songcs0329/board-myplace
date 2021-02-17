
import { combineReducers } from 'redux'
import user from './user'
import boards from './boards'
import map from './map'

const rootReducer = combineReducers({
  user,
  boards,
  map,
})

export default rootReducer