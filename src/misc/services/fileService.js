const send = (file, userId, token) => {
  var formData = new FormData()
  formData.append('file', file, file.name)
  formData.append('name', file.name)
  formData.append('size', file.size)

  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("http://134.122.65.136/api/v1/users/" + userId + "/documents", requestOptions)
    .then(response => response.text())
}

const recieve = (userId, token) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("http://134.122.65.136/api/v1/users/" + userId + "/documents", requestOptions)
    .then(response => response.text())
}

const getImage = (url, userId, token) => {
   var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  console.log('http://134.122.65.136' + url)
  return fetch("http://134.122.65.136" + url, requestOptions)
    .then(response => response.text())
}

export const fileService = {
  send,
  recieve,
  getImage
}
