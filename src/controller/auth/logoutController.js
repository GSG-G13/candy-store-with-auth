
const logoutController = (req, res)=>{
  res.clearCookie("access_token").redirect('/login');

}

module.exports = logoutController;