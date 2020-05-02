const validationErrorMessage = (state = '', action) => {
  switch(action.type) {
    case 'EMAIL_ERROR':
      return {
        ...state,
        emailError: action.payload
      }
    case 'PASSWORD_ERROR':
      return {
        ...state,
        passwordError: action.payload
      }
    case 'MATCH_PASSWORD_ERROR':
      return {
        ...state,
        matchPasswordError: action.payload
      }
    case 'REMOVE_ERROR_MESSAGE':
      const index = state.indexOf(action.payload)
      let newArray = [...state]
      newArray.splice(index, 1)
      return newArray
    case 'LOGIN_ERROR':
      return {
        loginError: action.payload
      }
    default:
      return state
  }
}

export default validationErrorMessage
