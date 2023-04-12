const jwt = require('jsonwebtoken');
require('env2')('.env');

const checkAdmin = (req, res, next) => {
  const decodedToken = req.myToken;
  console.log(decodedToken.role, "jj");
  if (decodedToken.role === 'admin') {
    next();
  } else {
    res.json('Unauthorized');
  }
};

module.exports = checkAdmin;