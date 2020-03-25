import React from 'react';
import './App.css';
import Test from './components/core/test'
import LoginPage from './components/core/organisms/LoginForm/LoginForm'
import PrivateRoute from './components/core/atoms/PrivateRoute/PrivateRoute'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/test' component={Test}/>
          <PrivateRoute exact path='/' component={Test}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </div>
  );
}

export default App
