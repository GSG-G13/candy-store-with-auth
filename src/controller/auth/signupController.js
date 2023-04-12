const { addUserQuery } = require("../../database/queries/auth");
const { signupSchema } = require("../../utils/validation");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("env2")(".env");

const saltRounds = 10;

const signupController = (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  const { error, value } = signupSchema.validate(
    { username, email, password, confirmPassword },
    { abortEarly: false }
  );
  if (error) {
    res.json({
      error: true,
      data: {
        errors: error.details,
      },
    });
    return;
  }
  console.log(value);

  // const { username, email } = req.body;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const data = { username, email, password: hash };

    addUserQuery(data)
      .then((data) => {
        const user = data.rows[0];
        jwt.sign(user, process.env.Secret_key, (err, token) => {
          res.cookie("token", token);
          res.send({ error: false });
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "Error Server!" });
      });
  });
};

module.exports = signupController;
