import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'

const route = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/auth/login" component={Login} />
          <Route path="/signup" component={Signup}/>
        </Switch>
      </Router>
    </div>
  )
}

export default route
