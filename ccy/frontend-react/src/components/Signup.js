import React from 'react'
import './Signup.css'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { signUpApi } from '../api/UserApi'
import { login } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'

const Signup = ({history}) => {
  const [userInfo, setUserInfo] = useState({username: '', password: '', password_confirmation: '', name: '', email: ''});
  const isLoggedIn = localStorage.getItem('token')
  const dispatch = useDispatch();

  if (isLoggedIn) {
    return <Redirect to='/' />
  }

  const onChangeHandler = (e) => {
    const value = e.target.value
    if (e.target.name === 'account') setUserInfo({...userInfo, username: value})
    if (e.target.name === 'password') setUserInfo({...userInfo, password: value})
    if (e.target.name === 'password_confirmation') setUserInfo({...userInfo, password_confirmation: value})
    if (e.target.name === 'name') setUserInfo({...userInfo, name: value})
    if (e.target.name === 'email') setUserInfo({...userInfo, email: value})
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await signUpApi(userInfo);
    
  
    if (response.status === 200) {
      dispatch(login(userInfo.username)) 
    }
    history.push('/')
  }

  return (
    <section>
      <form className="signup-form" onSubmit={onSubmitHandler}>
        <label htmlFor="account">ID</label>
        <input type="text" id="account" name="account" value={userInfo.username || ''} onChange={onChangeHandler} />
        <label htmlFor="password">PW</label>
        <input type="password" id="password" name="password" value={userInfo.password || ''} onChange={onChangeHandler} />
        <label htmlFor="password">Confirm</label>
        <input type="password" id="password_confirmation" name="password_confirmation" value={userInfo.password_confirmation || ''} onChange={onChangeHandler} />
        <label htmlFor="account">NAME</label>
        <input type="text" id="name" name="name" value={userInfo.name || ''} onChange={onChangeHandler} />
        <label htmlFor="account">EMAIL</label>
        <input type="email" id="email" name="email" value={userInfo.email || ''} onChange={onChangeHandler} />
        <button className="btn" onSubmit={onSubmitHandler}>Signup</button>
      </form>
    </section>
  )
}

export default Signup;
