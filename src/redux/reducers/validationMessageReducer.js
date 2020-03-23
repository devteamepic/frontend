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
        default:
            return state
    }
}

export default validationErrorMessage
