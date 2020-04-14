import React from 'react';
import './App.css';
import Test from './components/core/test'
import LoginPage from './components/core/pages/LoginPage/LoginPage'
import RegisterPage from './components/core/pages/RegisterPage/RegisterPage'
import HomePage from './components/core/pages/HomePage/HomePage'
import PrivateRoute from './components/core/atoms/PrivateRoute/PrivateRoute'
import { Route, Switch } from 'react-router-dom'

function App(props) {
  return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/test' component={Test}/>
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
          <Route path='/openSourceWiki' component={() => {
            window.location.href = 'https://en.wikipedia.org/wiki/Open_source'
            return null
          }}/>
          <Route path='/arxiv' component={() => {
            window.location.href = 'https://arxiv.org'
            return null
          }}/>
          <Route path='/github' component={() => {
            window.location.href = 'https://github.com/devteamepic'
            return null
          }}/>
        </Switch>
      </div>
  );
}

export default App
