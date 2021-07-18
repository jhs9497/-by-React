import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SIGNUP } from "../types/auth.type";

export const login_success = (userinfo) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userinfo,
  }
}

export const login_fail = () => {
  return {
    type: LOGIN_FAIL,
  }
}

export const logout = () => {
  return {
    type : LOGOUT,
  }
}

export const signup = () => {
  return {
    type : SIGNUP,
  }
}