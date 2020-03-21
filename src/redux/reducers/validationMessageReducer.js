const validationErrorMessage = (state = '', action) => {
    switch(action.type) {
        case 'EMAIL_ERROR':
            return action.payload
        case 'PASSWORD_ERROR':
            return action.payload
        case 'MATCH_PASSWORD_ERROR':
            return action.payload
        default:
            return ''
    }
}

export default validationErrorMessage
