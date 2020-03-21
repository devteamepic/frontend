import React, { useState } from 'react';
import './App.css';
import Test from './components/core/test'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function App(props) {
  const [validationErrorMessage, setValidationErrorMessage] = useState(props.validationErrorMessage)

  return (
      <div className="App">

        <Link style = {{ height: 'fit-content' }} to='/test'>Test</Link>
          <Route path='/test' component={Test}/>
      </div>
  );
}

const mapStateToProps = (state) => {
  const { validationErrorMessage } = state.validationErrorMessage
  return { validationErrorMessage }
}

export default connect(mapStateToProps) (App);
