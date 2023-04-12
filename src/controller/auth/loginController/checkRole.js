const jwt = require('jsonwebtoken');
require('env2')('.env');

const checkAdmin = (req, res, next) => {
  const decodedToken = req.cookies.access_token
  if (decodedToken.role === 'admin') {
    next();
  } else {
    res.json('Unauthorized');
  }
};

module.exports = checkAdmin;