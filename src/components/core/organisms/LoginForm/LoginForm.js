import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Redirect } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import login from '../../../../misc/services/loginService'
import { loginActions } from '../../../../redux/actions/loginActions'
import { emailChange, passwordChange } from '../../../../redux/actions/loginFormInputActions'
import { loginErrorMessage } from '../../../../redux/actions/validationMessageAction'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import { loginFormLinks } from '../../../../misc/loginFormLinks'

const LoginForm = ({
  dispatch,
  loggedIn,
  email,
  password,
  ...props }) => {
  const [response, setResponse] = useState('')
  const [additionalStyles] = useState(`
    width: 100%;
    height: fit-content;
  `)

  /**
   * Catchers submition of a form and calls the login service.
   * @param { Object } e Event.
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
      .then(response => {
        setResponse(JSON.parse(response))
        dispatch(loginActions.success({ email: response.email, fullName: response.full_name }))
      })
      .catch(error => {
        dispatch(emailChange(''))
        dispatch(passwordChange(''))
        dispatch(loginActions.failure(error))
      })
  }

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('token', response.access_token)
      localStorage.setItem('userId', response.user_id)
    }
    else if (loggedIn === false) {
      dispatch(loginErrorMessage('Invalid email or password. Or bad internet connection.'))
    }
  }, [response, loggedIn, dispatch, props])

  return (
    <FormStyledWrapper
      type = 'login'
      callback = { handleSubmit }
    >
      { loggedIn && <Redirect to='/home'/> }
      <Input
        type = { 'text' }
        placeholder = 'email'
        callback = { value => emailChange(value) }
        inputValue = { email }
      />
      <Input
        type = { 'password' }
        placeholder = 'password'
        callback = { value => passwordChange(value) }
        inputValue = { password }
      />
      <Input
        type = { 'submit' }
        text = 'Log in'
      />
      <TextViewer
        childrenData = { loginFormLinks }
        notDescription = { true }
        additionalStyles = { additionalStyles }
      />
    </FormStyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authenticate.loggedIn,
    email: state.loginInputChange.email,
    password: state.loginInputChange.password
  }
}

export default connect(mapStateToProps) (LoginForm)
