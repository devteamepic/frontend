import React from 'react';
import './App.css';
import LoginPage from './components/core/pages/LoginPage/LoginPage'
import RegisterPage from './components/core/pages/RegisterPage/RegisterPage'
import HomePage from './components/core/pages/HomePage/HomePage'
import PrivateRoute from './components/core/atoms/PrivateRoute/PrivateRoute'
import { Route, Switch, Redirect } from 'react-router-dom'

function App(props) {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={RegisterPage}/>
          <PrivateRoute exact path='/home' component={HomePage}/>
          <Route path='/openSourceWiki' component={() => {
            window.location.href = 'https://en.wikipedia.org/wiki/Open_source'
            return null
          }}/>
          <Redirect exact from="/" to="/home" />
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
