const { checkUser } = require("../../../database/queries/auth");
const { sign } = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
// const { compare } = require("bcrypt");
const bcrypt = require('bcrypt');
const { loginSchema } = require("../../../utils/validation");
const login = (req, res) => {
  const { name, password } = req.body;
  // console.log(req.body);
  const { error } = loginSchema.validate(
    { userName: name, password },
    { abortEarly: false }
  );
  if (error) {
    console.log(error);
    return res.json({
      msg: "check your email or passwords",
    });
  }

let role;

  checkUser(name)
    .then((data) => {
      console.log(data.rows,"from data");
      if (!data.rows.length) {
        return res.send("Go create account!");
      } else {
        const { password: hashedPassword } = data.rows[0];
        role = data.rows[0].role;

        return bcrypt.compare(password, hashedPassword).then(function(result) {
          return result;
      });
      }
    })
    .then((isChecked) => {
      if (isChecked) {
        sign(
          {
            name,
            role,
          },
          secretKey,
          (err, token) => {
            res.cookie("token", token);
            if (role==="admin"){
              res.redirect('/adminCandy')
            }else {
              res.redirect('/userCandyStore')
            }
          }
        );
      } else {
        res.status(400).json({ msg: "please write a correct password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });


  };
  

module.exports = login;
