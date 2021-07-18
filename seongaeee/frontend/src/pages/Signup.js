import React from 'react';
import Title from "../component/signup/Title";
import SignupInput from "../component/signup/SignupInput";
import MovePage from "../component/signup/MovePage";

const Signup = () => {
    return(
      <div className="outer">
        <div className="inner">
            <Title/>
            <SignupInput/>
            <MovePage/>
        </div>
      </div>
    );
}

export default Signup;