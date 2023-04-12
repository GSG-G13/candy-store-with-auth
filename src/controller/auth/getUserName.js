const jwt = require("jsonwebtoken");
require("env2")(".env");

const getUserName = (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.Secret_key, (err, decoded) => {
    if (decoded.name) {
      res.send(JSON.stringify(decoded.name));
    } else {
      res.send({ name: "username" });
    }
  });
};

module.exports = getUserName;
