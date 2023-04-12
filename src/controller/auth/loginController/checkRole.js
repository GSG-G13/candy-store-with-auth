const jwt = require("jsonwebtoken");
require("env2")(".env");

const checkAdmin = (req, res, next) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.Secret_key, (err, decoded) => {
    if (err) {
      res
        .status(401)
        .send(
          '<p style="font-size: 10vh; text-align: center;">401! Login First! </p>'
        );
    } else if (decoded.role === "admin") {
      next();
    } else {
      res.json("Unauthorized");
    }
  });
};

module.exports = checkAdmin;
