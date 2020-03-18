import React from 'react';
import './App.css';
import Test from './components/core/test'
import { Route, Link } from 'react-router-dom'

function App(props) {

  return (
      <div className="App">
          <Link to='/test'>Test</Link>
          <Route path='/test' component={Test}/>
      </div>
  );
}

export default App;
