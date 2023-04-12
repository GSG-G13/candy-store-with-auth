const {checkUser} = require('../../../database/queries/auth')
const {sign} = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const { compare } = require('bcrypt');
const { loginSchema } = require('../../../utils/validation');
const login = (req,res)=>{
  const {username,email,password } = req.body;
  const { error } = loginSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (error) {
    return res.json({
      msg: 'check your email or passwords',
    });
  }

  checkUser(username)
    .then((data) => {
      if (!data.rows.length) {
        return res.send('Go create account!');
      } else {
        const { password: hashedPassword } = data.rows[0];
        return compare(password, hashedPassword);
      }
    })
    .then((isChecked) => {
      if (isChecked) {
        sign(
          {
            id,
            username,
            email,
            role
          },
          secretKey,
          (err, token) => {
            res.cookie('access_token', token).json({ msg: 'success' });
          }
        );
      } else {
        res.status(400).json({ msg: 'please write a correct password' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}


module.exports = login;