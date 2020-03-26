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
          <Route path='/openSourceWiki' component={() => {
            window.location.href = 'https://en.wikipedia.org/wiki/Open_source'
            return null
          }}/>
        </Switch>
      </div>
  );
}

export default App
