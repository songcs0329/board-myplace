import { mapRender } from "Apis/kakao"

// action types
const GET_MAPOBJECT = "map/GET_MAPOBJECT"
const GET_MAPBOARDS = "map/GET_MAPBOARDS"


// action
export const getMapObject = (posX, posY) => {
  const mapObject = mapRender(posX, posY)
  console.log(mapObject)

  return {
    type: GET_MAPOBJECT,
    mapObject
  }
}

export const getMapBoards = () => {
  const mapBoards = []
  return {
    type: GET_MAPBOARDS,
    mapBoards
  }
}


// initialState
export const initialState = {
  mapObject: null,
  mapBoards: [
    {
      id: 0,
      name: "확인",
    },
    {
      id: 1,
      name: "철수",
    },
    {
      id: 2,
      name: "영희",
    }
  ]
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
        mapBoard: action.mapBoards
      }
    default:
      return state
  }
}

export default reducer