const {checkUserAuth,checkUserRole} = require('./loginController');
const signup = require('./signupController')
const logoutController = require('./logoutController')
const getUserName = require('./getUserName');

module.exports={checkUserAuth,checkUserRole,signup,logoutController,getUserName};