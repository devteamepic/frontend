import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import Text from '../../atoms/Text/Text'
import login from '../../../../misc/services/loginService'
import { request, success, failure } from '../../../../redux/actions/loginAction'

const LoginForm = ({ dispatch,
                     colorScheme,
                     loggedIn,
                     ...props }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    dispatch(request({ email }))

    login(email, password)
        .then(user => {
            dispatch(success(user))
          },
          error => {
            dispatch(failure(error.toString()))
          }
        )
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
          callback = { value => setEmail(value) }
        />
        <Input
          type = { 'password' }
          placeholder = 'password'
          callback = { value => setPassword(value) }
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
  const { loggingIn } = state.authenticate
  const { loggedIn } = state.authenticate
  return { loggingIn: loggingIn, loggedIn: loggedIn }
}

export default connect(mapStateToProps) (LoginForm)
