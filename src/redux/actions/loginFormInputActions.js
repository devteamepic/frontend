export function emailChange(email) {
    console.log(email)
    return {
        type: 'EMAIL_CHANGE',
        payload: email
    }
}

export function passwordChange(password) {
    console.log(password)
    return{
        type: 'PASSWORD_CHANGE',
        payload: password
    }
}
