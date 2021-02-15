// action types
export const LOGIN_USER = "user/LOGIN_USER"
export const LOGOUT_USER = "user/LOGOUT_USER"

// action
export const loginUser = (user) => {
  return { 
    type: LOGIN_USER,
    user
  }
}
export const logoutUser = () => {
  return { type: LOGOUT_USER }
}

// initialState
export const initialState = {
  userinfo: null
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        userinfo: action.user
      }
    case LOGOUT_USER:
      return {
        userinfo: null
      }
    default:
      return state
  }
}

export default reducer



