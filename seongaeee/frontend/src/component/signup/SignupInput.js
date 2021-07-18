import React from "react";
import { useState } from "react";
import axiosSignup from "../../axios/Signup";
import SignupService from "../../redux/actions/SignupService";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const SignupInput = () => {

  const dispatch = useDispatch();
  const history = useHistory();

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const trySignup = async (e) => {
      e.preventDefault();
      await SignupService(account, password, name, email)(dispatch);

      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if(isLoggedIn === "true"){
        console.log(isLoggedIn)
        history.push('/main');
      }else{
        console.log(isLoggedIn)
        alert("회원가입 실패!");
      }
    }

    return (
      <form onSubmit={trySignup}>
        <div className="form-group p-1">
          <label htmlFor="account">Account </label>
          <input type="text" className="form-control" id="account" name="account" onChange={(e)=>{setAccount(e.target.value)}}/>
        </div>
        <div className="form-group p-1">
          <label htmlFor="password">Password </label>
          <input type="text" className="form-control" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="form-group p-1">
          <label htmlFor="name">name </label>
          <input type="text" className="form-control" id="name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="form-group p-1">
          <label htmlFor="email">email </label>
          <input type="text" className="form-control" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="text-center p-4">
          <button type="submit" className="btn btn-dark btn-lg btn-block">회원가입하기</button>
        </div>
      </form>
    );
}

export default SignupInput;