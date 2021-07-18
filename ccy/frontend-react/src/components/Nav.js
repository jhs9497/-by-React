import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions'
import { useEffect, useState } from 'react';
import { logOutApi } from '../api/UserApi';


const Nav = () => {

  const dispatch = useDispatch();

  const [now, setNow] = useState(false);
  const isLoggedIn = useSelector(state=> state.currentUser.isLoggedin)
  
  // 새로고침 했을 때, nav에서 Login, Logout 상태 판별하기
  useEffect(() => {
    const loginState = localStorage.getItem('token')
    if (loginState) {
      setNow(true)
      console.log(now)
    }
  },[now])
  
  // 로그아웃
  const logoutHandler = () => {
    logOutApi()
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setNow(false)
    dispatch(logout())
  }


  return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            {isLoggedIn || now ? <Link to="/" onClick={logoutHandler} >Logout</Link> : <Link to="/auth/login">Login</Link>}
          </li>
          <li>
            {isLoggedIn || now ? <Link to="/">MyPage</Link> : <Link to="/signup">Signup</Link>}
          </li>
          <li>
            <Link to="/main/todo">Todo</Link>
          </li>
        </ul>
      </div>
    )
}

export default Nav;
