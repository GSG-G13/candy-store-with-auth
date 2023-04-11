const validationSignup = (data) => {
  const usernameContent = document.querySelector('.usernameContent')
  const emailContent = document.querySelector('.emailContent')
  const passwordContent = document.querySelector('.passwordContent')
  const confirmPasswordContent = document.querySelector(
    '.confirmPasswordContent',
  )

  usernameContent.textContent = ''
  emailContent.textContent = ''
  passwordContent.textContent = ''
  confirmPasswordContent.textContent = ''

  data.forEach((msgError) => {
    if (msgError.path[0] === 'username') {
      const labelError = document.createElement('label')
      usernameContent.textContent = ''
      labelError.style.color = 'red'
      labelError.textContent = msgError.message
      usernameContent.appendChild(labelError)
    }

    if (msgError.path[0] === 'email') {
      const labelError = document.createElement('label')
      emailContent.textContent = ''
      labelError.style.color = 'red'
      labelError.textContent = msgError.message
      emailContent.appendChild(labelError)
    }

    if (msgError.path[0] === 'password') {
      const labelError = document.createElement('label')
      passwordContent.textContent = ''
      labelError.style.color = 'red'
      labelError.textContent = msgError.message
      passwordContent.appendChild(labelError)
    }
    if (msgError.path[0] === 'confirmPassword') {
      const labelError = document.createElement('label')
      confirmPasswordContent.textContent = ''
      labelError.style.color = 'red'
      labelError.textContent = msgError.message
      confirmPasswordContent.appendChild(labelError)
    }
  })
}
