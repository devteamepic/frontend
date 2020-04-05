import React, { useState, useEffect } from 'react';
import './App.css';
import Test from './components/core/test'
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/core/organisms/LoginForm/LoginForm'
import colorScheme from './misc/colorScheme'
import { connect } from 'react-redux'
import ErrorMessageDialog from './components/core/organisms/ErrorMessageDialog/ErrorMessageDialog'

function App({ error, ...props }) {
  const [isErrorMessage, setIsErrorMessage] = useState(error)

  useEffect(() => {
    setIsErrorMessage(error)
  }, [error])

  return (
      <div className="App">
        { isErrorMessage && <ErrorMessageDialog/> }
        <Link style = {{ height: 'fit-content' }} to='/test'>Test</Link>
        <Route path='/test' component={Test}/>
        <LoginForm
          colorScheme = { colorScheme }
        />
      </div>
  );
}

const mapStateToProps = (state) => {
  return { error : state.validationErrorMessage }
}

export default connect(mapStateToProps) (App);
