import React from 'react';
import Title from "../component/login/Title";
import LoginInput from "../component/login/LoginInput";
import MovePage from "../component/login/MovePage";

const Login = () => {
    return(
      <div className="outer">
        <div className="inner">
            <Title/>
            <LoginInput/>
            <MovePage/>
        </div>
      </div>
    );
}

export default Login;