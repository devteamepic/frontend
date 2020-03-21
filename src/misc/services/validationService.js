const passwordValidate = (password) => {
    if (password.length < 6) {
        return true
    }

    return false
}

export const validator = {
    passwordValidate
}
