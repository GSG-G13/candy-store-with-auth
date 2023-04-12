const { addUserQuery } = require('../../database/queries/auth')
const { signupSchema } = require('../../utils/validation')

const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config()

const signupController = (req, res) => {
  const { username, email, password, confirmPassword } = req.body
  console.log(req.body)
  const { error, value } = signupSchema.validate(
    { username, email, password, confirmPassword },
    { abortEarly: false },
  )
  if (error) {
    res.json({
      error: true,
      data: {
        errors: error.details,
      },
    })
    return
  }
console.log(value)
  addUserQuery({ username, email, password })
  // .then((err) => res.json({err:false}))
    .then((data) => {
      const user = data.rows[0]
      jwt.sign(user, process.env.Secret_key, (err, token) => {
        res.cookie('token', token).redirect('/candies')
      })
      // bcrypt.hash(req.body.password,saltRounds,(err,hash) => {
      //   req.body.password = hash;
      // })

    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ msg: 'Error Server!' })
    })
}


module.exports = signupController
