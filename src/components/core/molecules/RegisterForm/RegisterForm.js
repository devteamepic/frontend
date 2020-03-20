import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import Text from '../../atoms/Text/Text'
import login from '../../../../misc/services/loginService'
import { request, success, failure } from '../../../../redux/actions/loginAction'

const RegisterForm = ({ dispatch, colorScheme, loggedIn, ...props }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            type = { 'text' }
            placeholder = 'email'
            callback = { value => setEmail(value) }
          />
          <Input
            type = { 'text' }
            placeholder = 'first name'
            callback = { value => setFirstName(value) }
          />
          <Input
            type = { 'text' }
            placeholder = 'last name'
            callback = { value => setLastName(value) }
          />
          <Input
            type = { 'password' }
            placeholder = 'password'
            callback = { value => setPassword(value) }
          />
          <Input
            type = { 'submit' }
            text = 'Register'
          />
        </FormStyledWrapper>
    )
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authenticate
    const { loggedIn } = state.authenticate
    return { loggingIn: loggingIn, loggedIn: loggedIn }
}

export default connect(mapStateToProps) (RegisterForm)
