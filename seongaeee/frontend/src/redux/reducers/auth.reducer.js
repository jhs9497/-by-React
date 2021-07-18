import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SIGNUP} from "../types/auth.type";

const userinfo = JSON.parse(localStorage.getItem("user"));

const initialState = userinfo
  ? {isLoggedIn: true, userinfo}
  : {isLoggedIn: false, userinfo: null};

export default function (state = initialState, action){
  const {type, payload} = action;

  switch (type){
    case LOGIN_SUCCESS:
      return {
        ...state,
        userinfo: payload.userinfo,
        isLoggedIn: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        userinfo: null,
        isLoggedIn: false
      };
    case LOGOUT:
      return {
        ...state,
        userinfo: null,
        isLoggedIn: false
      };
    case SIGNUP:
      return {
        ...state,
        userinfo: payload.userinfo,
        isLoggedIn: true
      };
    default:
      return state;
  }
}