import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import Text from '../../atoms/Text/Text'
import login from '../../../../misc/services/loginService'
import { emailErrorMessage, passwordErrorMessage, matchPasswordErrorMessage } from '../../../../redux/actions/validationMessageAction'
import { validator } from '../../../../misc/services/validationService'

const RegisterForm = ({ dispatch, colorScheme, loggedIn, ...props }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [matchingPassword, setMatchingPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = () => {
        alert('register submit')
        console.table({ email, firstName, lastName, password })
    }

    return (
        <FormStyledWrapper
          type = 'register'
          colorScheme = { colorScheme }
          callback = { handleSubmit }
        >
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'email'
            callback = { value => setEmail(value) }
            validate = { validator.validateEmail(email) }
            dispatchable = { emailErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'first name'
            callback = { value => setFirstName(value) }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'last name'
            callback = { value => setLastName(value) }
          />
          <Input
            height = '95%'
            type = { 'password' }
            placeholder = 'password'
            callback = { value => setPassword(value) }
            validate = { validator.passwordValidate(password) }
            dispatchable = { passwordErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'password' }
            placeholder = 'repeat password'
            callback = { value => setMatchingPassword(value) }
            validate = { validator.matchPasswords(password, matchingPassword) }
            dispatchable = { matchPasswordErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'submit' }
            text = 'Register'
          />
        </FormStyledWrapper>
    )
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authenticate
    const { loggedIn } = state.authenticate
    return {
      loggingIn: loggingIn,
      loggedIn: loggedIn,
    }
}

export default connect(mapStateToProps) (RegisterForm)
