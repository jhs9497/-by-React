import { ActionTypes } from "../type/actionTypes";

const initialState = {
  isLoggedin: false,
  currentUser: {
    account: '',
  }
}

export const userReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoggedin: !state.isLoggedin,
        currentUser: {
          account: payload,
        }
      }
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedin: !state.isLoggedin,
        currentUser: {
          account: '',
        }
      }
    default:
      return state
  }
}