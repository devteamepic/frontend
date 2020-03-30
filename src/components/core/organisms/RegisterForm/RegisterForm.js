import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import register from '../../../../misc/services/registerService'
import { emailErrorMessage, passwordErrorMessage, matchPasswordErrorMessage } from '../../../../redux/actions/validationMessageAction'
import { request, success, failure } from '../../../../redux/actions/loginAction'
import { validator } from '../../../../misc/services/validationService'
import { emailChange, firstNameChange, lastNameChange, passwordChange, matchingPasswordChange } from '../../../../redux/actions/registerFormInputAction'

const RegisterForm = ({
  dispatch,
  colorScheme,
  loggedIn,
  loggingIn,
  email,
  firstName,
  lastName,
  password,
  matchingPassword,
  ...props }) => {

    const handleSubmit = (e) => {
      e.preventDefault()

      dispatch(request({ email }))

      register(email, firstName, lastName, password)
        .then(response => {
          dispatch(success({ email: response.email, fullName: response.full_name }))
        })
        .catch(errorResponse => {
          dispatch(failure(errorResponse))
        })
    }

    useEffect(() => {
      if (loggedIn) {
        console.log('registered and logged in successfully')
      }
      else if (loggingIn) {
        console.log('wtf')
      }
    }, [loggedIn, loggingIn])

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
            callback = { value => emailChange(value) }
            validate = { validator.validateEmail(email) }
            errorDispatch = { emailErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'password' }
            placeholder = 'password'
            callback = { value => passwordChange(value) }
            validate = { validator.passwordValidate(password) }
            errorDispatch = { passwordErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'first name'
            callback = { value => firstNameChange(value) }
          />
          <Input
            height = '95%'
            type = { 'password' }
            placeholder = 'repeat password'
            callback = { value => matchingPasswordChange(value) }
            validate = { validator.matchPasswords(password, matchingPassword) }
            errorDispatch = { matchPasswordErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'last name'
            callback = { value => lastNameChange(value) }
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
    return {
      loggingIn: state.authenticate.loggingIn,
      loggedIn: state.authenticate.loggedIn,
      email: state.registerInputChange.email,
      firstName: state.registerInputChange.firstName,
      lastName: state.registerInputChange.lastName,
      password: state.registerInputChange.password,
      matchingPassword: state.registerInputChange.matchingPassword,
    }
}

export default connect(mapStateToProps) (RegisterForm)
