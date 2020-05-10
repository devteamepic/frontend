const fetchUserData = (token) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: new Headers({
            'Authorization' : 'Bearer ' + token,
        })
    }

    return fetch('http://134.122.65.136/api/v1/users/me', requestOptions)
        .then(response => response.text())
}

export const userService = {
    fetchUserData
}
