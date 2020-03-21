export function emailErrorMessage(message) {
    return {
        type: 'EMAIL_ERROR',
        message
    }
}

export function passwordErrorMessage(message) {
    return {
        type: 'PASSWORD_ERROR',
        message
    }
}

export function matchPasswordErrorMessage(message) {
    return {
        type: 'MATHC_PASSORD_ERROR',
        message
    }
}
