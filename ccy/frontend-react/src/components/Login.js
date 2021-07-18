import React from 'react';
import './Login.css';
import { useState, useEffect } from 'react';
import { authUserApi } from '../api/UserApi';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions'


const Login = ({ history }) => {
  // 유저 아이디, 비밀번호 정보
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [message, setMessage] = useState({status:'', msg:''});
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      history.push('/')
    }
  },[history])

  // 로그인 버튼 이벤트
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const userInfo = {
      username: id,
      password: pw
    }
    
    const response = await authUserApi(userInfo);
    
    setMessage({
      ...response
    })
    
    if (response.status === 200) {
      dispatch(login(userInfo.account)) 
    }
    
    history.push('/')
  }

  // Id,Pw 입력
  const onChangeHandler = (e) => {
    const value = e.target.value
    if (e.target.name === 'account') setId(value)
    if (e.target.name === 'password') setPw(value)
  }

  return (
    <section>
      <form className="login-form" onSubmit={onSubmitHandler}>
        <label htmlFor="account">ID</label>
        <input 
          type="text" 
          id="account" 
          name="account"
          onChange={onChangeHandler}
          value={id}
        />
        <label htmlFor="password">PW</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          onChange={onChangeHandler}
          value={pw}
        />
        <a href="/">Did you forgot your password?</a>
        <button 
          className="btn"
          onSubmit={onSubmitHandler}
        >Log in</button>
      <div>
        {message ? <p>{message.msg}</p> : ''}
      </div>
      </form>
    </section>
  )
}

export default Login;