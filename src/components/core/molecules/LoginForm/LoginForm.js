import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import Text from '../../atoms/Text/Text'
import login from '../../../../misc/services/loginService'
import { request, success, failure } from '../../../../redux/actions/loginAction'
import { emailChange, passwordChange } from '../../../../redux/actions/loginFormInputActions'

const LoginForm = ({ dispatch,
                     colorScheme,
                     loggedIn,
                     email,
                     password,
                     ...props }) => {

  const handleSubmit = (e) => {
    dispatch(request({ email }))

    login(email, password)
      .then(response => {
        dispatch(success({ email: response.email, full_name: response.full_name }))
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }

  useEffect(() => {
    // PIECE OF SHIT
    if (loggedIn) console.log('logged in successfully')
  }, [loggedIn])

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
        <Link style={{ color: colorScheme.blue }} to='/about'>
          <Text
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
