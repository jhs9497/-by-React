import { ActionTypes } from "../type/actionTypes";

export const login = (account) => {
  return {
    type: ActionTypes.LOGIN,
    payload: account,
  } 
}

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  }
}