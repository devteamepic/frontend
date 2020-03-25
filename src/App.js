import React from 'react';
import './App.css';
import Test from './components/core/test'
import LoginPage from './components/core/pages/LoginPage/LoginPage'
import RegisterPage from './components/core/pages/RegisterPage/RegisterPage'
import PrivateRoute from './components/core/atoms/PrivateRoute/PrivateRoute'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/test' component={Test}/>
          <PrivateRoute exact path='/' component={Test}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
        </Switch>
      </div>
  );
}

export default App
