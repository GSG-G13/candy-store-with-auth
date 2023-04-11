const connection = require('../../config/connection')

const addUserQuery = (addUser) => {
  const { username, email, password } = addUser
  sql = {
    text:
      'INSERT INTO users (username,email,password, role) VALUES($1,$2,$3, $4) RETURNING id, username, email, role',
    values: [username, email, password, 'user'],
  }
  return connection.query(sql)
}

module.exports = addUserQuery
