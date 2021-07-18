import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginService from "../../redux/actions/LoginService"

const LoginInput = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = async (e) => {
      e.preventDefault();
      await LoginService(account, password)(dispatch);

      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if(isLoggedIn === "true"){
        console.log(isLoggedIn)
        history.push('/main');
      }else{
        console.log(isLoggedIn)
        alert("로그인 실패!");
      }
    }

    return (
      <form onSubmit={tryLogin}>
        <div className="form-group p-1">
          <label htmlFor="account">Account </label>
          <input type="text" className="form-control" id="account" name="account" onChange={(e)=>{setAccount(e.target.value)}}/>
        </div>
        <div className="form-group p-1">
          <label htmlFor="password">Password </label>
          <input type="text" className="form-control" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="text-center p-4">
         <button type="submit" className="btn btn-dark btn-lg btn-block" >로그인하기</button>
        </div>
      </form>
    );
}

export default LoginInput;