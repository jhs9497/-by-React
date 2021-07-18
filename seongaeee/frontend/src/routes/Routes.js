import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route path="/auth/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/main" component={Main}/>
        <Route exact path='/' component={Main}/>
      </Switch>
    </Router>
  );
}

export default Routes;