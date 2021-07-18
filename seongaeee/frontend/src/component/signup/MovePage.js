import React from "react";
import { Link } from "react-router-dom";

const MovePage = () => {
  return(
    <div className="text-center">
      <Link to="/auth/login">
        <button className="btn">로그인</button>
      </Link>
      <Link to="/main">
        <button className="btn">메인으로</button>
      </Link>
    </div>
  );
}

export default MovePage;