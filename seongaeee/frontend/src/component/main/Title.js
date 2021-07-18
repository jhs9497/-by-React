import React from "react";

const Title = () => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userinfo = localStorage.getItem("userinfo");

  return (
    <div className="main-title">
      {isLoggedIn === "false" ? (
        <h1>Hello</h1>
      ) : (
        <h1>Hello {userinfo.account}</h1>
      )}
    </div>
  );
}

export default Title;