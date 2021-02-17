// action types
export const GET_MAPOBJECT = "map/GET_MAPOBJECT"
export const GET_SEARCH_PLACELIST = "map/GET_SEARCH_PLACELIST"

// action
export const getMapObject = (mapObj) => {
  return {
    type: GET_MAPOBJECT,
    mapObj
  }
}

export const getSearchPlaceList = (keywordResult) => {
  return {
    type: GET_SEARCH_PLACELIST,
    keywordResult
  }
}


// initialState
export const initialState = {
  mapObject: null,
  placeList: null
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MAPOBJECT:
      return {
        ...state,
        mapObject: action.mapObj
      }
    case GET_SEARCH_PLACELIST:
      return {
        ...state,
        placeList: action.keywordResult
      }
    default:
      return state
  }
}

export default reducer