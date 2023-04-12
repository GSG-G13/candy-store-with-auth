const logoutController = (req, res) => {
  res.clearCookie("token").send({ error: false });
};

module.exports = logoutController;
