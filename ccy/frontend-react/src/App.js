import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Todo from './components/Todo'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/auth/login" component={Login} />
          <Route path="/signup" component={Signup}/>
          <Route path="/main/todo" component={Todo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;