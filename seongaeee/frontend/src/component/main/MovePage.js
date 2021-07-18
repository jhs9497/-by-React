import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import LogoutService from "../../redux/actions/LogoutService"

const MovePage = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logOut = () => {
    LogoutService()(dispatch);
    history.push('/main');
  }

  return(
    <div className="main-movePage">
      { isLoggedIn === "false" ? (
        <div className="isNotLoggedIn-main-movePage">
          <Link to="/auth/login">
            <button className="btn">로그인</button>
          </Link>
          <Link to="/signup">
            <button className="btn">회원가입</button>
          </Link>
        </div>
      ) : (
        <div className="isLoggedIn-main-movePage">
          <button className="btn">TodoList</button>
          <button className="btn">회원정보</button>
          <button className="btn" onClick={logOut}>로그아웃</button>
        </div>
      )}
    </div>
  );
}

export default MovePage;