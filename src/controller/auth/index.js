const {checkUserAuth,checkUserRole} = require('./loginController');
const signup = require('./signupController')

module.exports={checkUserAuth,checkUserRole,signup};