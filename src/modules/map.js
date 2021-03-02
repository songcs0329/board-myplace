// action types
const GET_MAPBOARDS = "map/GET_MAPBOARDS"

// action
export const getMapBoards = (mapBoards) => {
  return {
    type: GET_MAPBOARDS,
    mapBoards
  }
}

// initialState
export const initialState = {
  mapBoards: [],
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
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