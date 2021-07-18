import React from 'react'
import { logout } from "./auth.action";
import { logout_storage } from "../../storage/auth.storage";

const LogoutService = () => {
  return function (dispatch){
    logout_storage();
    dispatch(logout());
  }
}

export default LogoutService;