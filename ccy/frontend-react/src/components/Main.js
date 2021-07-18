import React from 'react'
import './Main.css'

const Main = ({history}) => {
  const username = localStorage.getItem('username')
  
  return (
    <section className="main">
      <h1>Main Page</h1>
      <div>
        {username ? <h2>{username}님 어서오세요</h2> : ''}
      </div>
    </section>
  )
}


export default Main;