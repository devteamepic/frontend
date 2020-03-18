import React from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import LoginFormStyled from '../../../styled/molecules/loginFormStyled'

const LoginForm = ({ dispatch, ...props }) => {
    return (
        <LoginFormStyled>
          <Input
            type = { 'text' }
            placeholder = 'email'
          />
          <Input
            type = { 'password' }
            placeholder = 'password'
          />
          <Input
            type = { 'submit' }
            text = 'Log in'
          />
        </LoginFormStyled>
    )
}

export default LoginForm
