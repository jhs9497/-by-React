import React from 'react'
import axios from "axios";
import { signup } from "./auth.action";
import { signup_storage} from "../../storage/auth.storage";

const LoginService =  (account, password, name, email) => {

  const API_URL = "/auth/";
  const userinfo = {
    "account:": account,
    "name:": name,
    "email:": email,
  }

  return async function(dispatch) {
    await axios
      .post(
        API_URL + 'signup',
        {
          account: account, password: password, name: name, email: email
        },
        {
          headers: {
            'Content-type': 'application/json',
          }
        })
      .then(function (response) {
        signup_storage(response.data.accessToken, JSON.stringify(userinfo));
        dispatch(signup(userinfo));
      })
      .catch(function () {
        }
      );
  }
}

export default LoginService;