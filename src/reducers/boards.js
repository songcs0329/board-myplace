// action types
export const CREATE_BOARD = "boards/CREATE_BOARD"
export const DELETE_BOARD = "boards/DELETE_BOARD"

// action


// initialState
export const initialState = {
  boardsList: []
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    
    default:
      return state
  }
}

export default reducer