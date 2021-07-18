import React from 'react'
import { Redirect } from 'react-router';

const Todo = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    alert('please login')
    return <Redirect to="/auth/login" />
  }

  return (
    <div>
      Todo Page
    </div>
  )
}

export default Todo

