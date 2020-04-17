const send = (fileArray, userId, token) => {
    var formData = new FormData()
    formData.append('file', fileArray[0], fileArray[0].name)
    formData.append('name', 'scan')

    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
        headers: new Headers({
            'Authorization' : 'Bearer ' + token,
            "Access-Control-Allow-Origin" : "*"
        })
    }

    return fetch("http://134.122.65.136/api/v1/users/" + userId + "/documents", requestOptions)
        .then(response => response.text())
}

export const fileService = {
    send,
}
