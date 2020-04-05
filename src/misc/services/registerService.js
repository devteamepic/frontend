import axios from 'axios'

const register = (email, firstName, lastName, password) => {
    var formData = new FormData()
    formData.set('email', email)
    formData.set('password', password)
    formData.set('first_name', firstName)
    formData.set('last_name', lastName)

    return axios({
        method: 'POST',
        url: 'http://134.122.65.136/api/v1/auth/sign_up',
        formdata: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then(response => {
            response.text()
        })
}

export default register
