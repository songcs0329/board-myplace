// action types
const GET_MAPOBJECT = "map/GET_MAPOBJECT"
const GET_MAPBOARDS = "map/GET_MAPBOARDS"
const GET_MAPITEM = "map/GET_MAPITEM"


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

export const getMapItem = (mapItem) => {
  return {
    type: GET_MAPITEM,
    mapItem
  }
}

// initialState
export const initialState = {
  mapObject: null,
  mapBoards: [],
  mapItem: null
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
      case GET_MAPITEM:
        return {
          ...state,
          mapItem: action.mapItem
        }
    default:
      return state
  }
}

export default reducer