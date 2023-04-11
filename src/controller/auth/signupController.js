const { addUserQuery } = require('../../database/queries/auth')

const signupController = (req, res) => {
  const addUser = req.body
  addUserQuery(addUser)
    .then(() => res.redirect('/candy'))
    .catch(() => res.status(500).json({ msg: 'Error Server!' }))
}

module.exports = signupController
