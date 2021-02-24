// action types
const GET_MAPOBJECT = "map/GET_MAPOBJECT"
const GET_MAPBOARDS = "map/GET_MAPBOARDS"


// action
export const getMapObject = (mapObject) => {
  return {
    type: GET_MAPOBJECT,
    mapObject
  }
}

export const getMapBoards = (mapBoards) => {
  return {
    type: GET_MAPBOARDS,
    mapBoards
  }
}


// initialState
export const initialState = {
  mapObject: null,
  mapBoards: []
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MAPOBJECT:
      return {
        ...state,
        mapObject: action.mapObject
      }
    case GET_MAPBOARDS:
      return {
        ...state,
        mapBoards: action.mapBoards
      }
    default:
      return state
  }
}

export default reducer