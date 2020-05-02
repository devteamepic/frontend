const emailErrorMessage = (message) => {
  return {
    type: 'EMAIL_ERROR',
    payload: message
  }
}

const passwordErrorMessage = (message) => {
  return {
    type: 'PASSWORD_ERROR',
    payload: message
  }
}

const matchPasswordErrorMessage = (message) => {
  return {
    type: 'MATCH_PASSWORD_ERROR',
    payload: message
  }
}

const removeErrorMessage = (key) => {
  return {
    type: 'REMOVE_ERROR_MESSAGE',
    payload: key
  }
}

const loginErrorMessage = (message) => {
  return {
    type: 'LOGIN_ERROR',
    payload: message
  }
}

export const validationErrorActions = {
  emailErrorMessage,
  passwordErrorMessage,
  matchPasswordErrorMessage,
  removeErrorMessage,
  loginErrorMessage
}
