const { addUserQuery } = require("../../database/queries/auth");
const { signupSchema } = require("../../utils/validation");

var jwt = require("jsonwebtoken");
require("env2")(".env");

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
  addUserQuery({ username, email, password })
    .then((data) => {
      const user = data.rows[0];
      console.log(user);
      jwt.sign(user, process.env.Secret_key, (err, token) => {
        console.log(token);
        res.cookie("token", token);
        res.redirect("/userCandyStore");
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error Server!" });
    });
};

module.exports = signupController;
