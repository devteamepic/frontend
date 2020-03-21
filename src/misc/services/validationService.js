const passwordValidate = (password) => {
    if (password.length < 6) {
        return true
    }

    return false
}

const matchPasswords = (password, matchingPassword) => {
    if (password !== matchingPassword) return true

    return false
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(email).toLowerCase());
}

export const validator = {
    passwordValidate,
    matchPasswords,
    validateEmail
}
