import React from "react";
import { Link } from 'react-router-dom'

const MovePage = () => {
  return(
    <div className="text-center">
      <button className="btn">비밀번호찾기</button>
      <Link to="/signup">
        <button className="btn">회원가입</button>
      </Link>
      <Link to="/main">
        <button className="btn">메인으로</button>
      </Link>
    </div>
  )
};

export default MovePage;