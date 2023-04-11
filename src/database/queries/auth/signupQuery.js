const connection = require('../../config/connection')

const addUserQuery = (addUser) => {
  const { username, email, password } = addUser
  sql = {
    text:
      'INSERT INTO users (username,email,password) VALUES($1,$2,$3)',
    values: [username, email, password],
  }
  return connection.query(sql)
}

module.exports = addUserQuery
