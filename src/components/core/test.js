import React, { useState, useEffect } from 'react'
import LoginForm from './molecules/LoginForm/LoginForm'
import RegisterForm from './molecules/RegisterForm/RegisterForm'
import { connect } from 'react-redux'
import '../../App.css'
import colorScheme from '../../misc/colorScheme'
import Text from '../core/atoms/Text/Text'
import ErrorMessage from '../core/molecules/ErrorMessage/ErrorMessage'

const Test = ({ error, ...props }) => {
  const [isErrorMessage, setIsErrorMessage] = useState(error)

  useEffect(() => {
    setIsErrorMessage(error)
  }, [error])

    return (
        <div id='test'>
        { isErrorMessage && <ErrorMessage/> }
          <RegisterForm
            colorScheme = { colorScheme }
          />
          <div style = {{ height: '10px' }}/>
           <LoginForm
            colorScheme = { colorScheme }
          />
        </div>
    )
}

const mapStateToProps = (state) => {
  return { error : state.validationErrorMessage }
}

export default connect(mapStateToProps) (Test)
