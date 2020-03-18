import React from 'react'
import '../../../../App.css'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import LoginFormStyled from '../../../styled/molecules/loginFormStyled'

const LoginForm = ({ dispatch, colorScheme, ...props }) => {
    return (
      <LoginFormStyled
        colorScheme = { colorScheme }
      >
        <form id='login-form'>
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
        </form>
        <Link style={{ color: colorScheme.blue }} to='/about'>What is a UNIFOUND</Link>
      </LoginFormStyled>
    )
}

export default LoginForm
