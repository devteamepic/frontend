const register = (email, firstName, lastName, password) => {
  var formdata = new FormData()
  formdata.set('email', email)
  formdata.set('password', password)
  formdata.set('first_name', firstName)
  formdata.set('last_name', lastName)

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  return fetch("https://unifound.me/api/v1/auth/sign_up", requestOptions)
    .then(response => response)
}

export default register
