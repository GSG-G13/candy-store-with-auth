const jwt = require("jsonwebtoken");
require("env2")(".env");

const secretKey = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
  const token = req.cookies;
  console.log(req.cookies);
  jwt.verify(token, secretKey, (err, decodeToken) => {
    if (err) {
      res.status(404).json("You are not authorized");
      console.log(err);
    } else {
      if (decodeToken.username) {
        req.myToken = decodeToken;
        next();
      } else {
        res.send("Login Page");
      }
    }
  });
};

module.exports = checkAuth;
