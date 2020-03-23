import React from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import { emailErrorMessage, passwordErrorMessage, matchPasswordErrorMessage } from '../../../../redux/actions/validationMessageAction'
import { validator } from '../../../../misc/services/validationService'
import { emailChange, firstNameChange, lastNameChange, passwordChange, matchingPasswordChange } from '../../../../redux/actions/registerFormInputAction'

const RegisterForm = ({ dispatch,
                        colorScheme,
                        loggedIn,
                        email,
                        firstName,
                        lastName,
                        password,
                        matchingPassword,
                        ...props }) => {

    const handleSubmit = () => {
        console.table({ email, firstName, lastName, password })
        alert('register submit')
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
            callback = { value => emailChange(value) }
            validate = { validator.validateEmail(email) }
            errorDispatch = { emailErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'first name'
            callback = { value => firstNameChange(value) }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'last name'
            callback = { value => lastNameChange(value) }
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
            type = { 'password' }
            placeholder = 'repeat password'
            callback = { value => matchingPasswordChange(value) }
            validate = { validator.matchPasswords(password, matchingPassword) }
            errorDispatch = { matchPasswordErrorMessage }
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
