import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import Text from '../../atoms/Text/Text'
import login from '../../../../misc/services/loginService'
import { request, success, failure } from '../../../../redux/actions/loginAction'
import { emailChange, passwordChange } from '../../../../redux/actions/loginFormInputActions'
import { loginErrorMessage } from '../../../../redux/actions/validationMessageAction'
import colorScheme from '../../../../misc/colorScheme'

const LoginForm = ({
  dispatch,
  loggingIn,
  loggedIn,
  email,
  password,
  ...props }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(request({ email }))

    login(email, password)
      .then(response => {
        dispatch(success({ email: response.email, fullName: response.full_name }))
      })
      .catch(error => {
        console.log(error)
        dispatch(failure(error))
      })
  }

  useEffect(() => {
    // PIECE OF SHIT
    if (loggedIn) {
      console.log('logged in successfully')
        props.history.push('/')
    }
    else if (loggingIn) {
      dispatch(loginErrorMessage('Invalid email or password. Or bad internet connection.'))
    }
  }, [loggedIn, loggingIn, dispatch, props])

    return (
      <FormStyledWrapper
        type = 'login'
        colorScheme = { colorScheme }
        callback = { handleSubmit }
      >
        <Input
          type = { 'text' }
          placeholder = 'email'
          callback = { value => emailChange(value) }
        />
        <Input
          type = { 'password' }
          placeholder = 'password'
          callback = { value => passwordChange(value) }
        />
        <Input
          type = { 'submit' }
          text = 'Log in'
        />
        <Link style={{ color: colorScheme.blue, width: 'fit-content' }} to='/register'>
          <Text
            isHeader = { true }
            size = { 'small' }
          >
            Register
          </Text>
        </Link>
        <br/>
        <Link style={{ color: colorScheme.blue }} to='/about'>
          <Text
            isHeader = { true }
            size = { 'small' }
          >
            What is a UNIFOUND
          </Text>
        </Link>
      </FormStyledWrapper>
    )
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.authenticate.loggingIn,
    loggedIn: state.authenticate.loggedIn,
    email: state.loginInputChange.email,
    password: state.loginInputChange.password
  }
}

export default connect(mapStateToProps) (LoginForm)
