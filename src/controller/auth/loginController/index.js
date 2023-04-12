const checkUserAuth = require("./checkAuth");
const checkUserRole = require("./checkRole");
const { join } = require("path");
const getLoginPage = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "..", "public", "html", "loginPage.html")
  );
};
module.exports = {
  checkUserAuth,
  checkUserRole,
  getLoginPage,
};
