import axios from 'axios'

const login = (email, password) => {
    var formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    console.log('in login')

    return axios({
        method: 'POST',
        url: 'http://localhost:8080/api/v1/auth/sign_in',
        formdata: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then(response => response.data)
}

export default login
