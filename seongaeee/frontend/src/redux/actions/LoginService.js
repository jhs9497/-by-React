import React from 'react'
import axios from "axios";
import { login_success, login_fail } from "./auth.action";
import { login_success_storage, login_fail_storage } from "../../storage/auth.storage";

const LoginService =  (account, password) => {

  const API_URL = "/auth/";
  const userinfo = {
    "account:": account,
  }

  return async function(dispatch) {
    await axios
      .post(
        API_URL + 'login',
        {
          account: account, password: password
        },
        {
          headers: {
            'Content-type': 'application/json',
          }
        })
      .then(function (response) {
        login_success_storage(response.data.accessToken, JSON.stringify(userinfo));
        dispatch(login_success(userinfo));
      })
      .catch(function () {
        login_fail_storage();
        dispatch(login_fail());
      });
  }
}

export default LoginService;