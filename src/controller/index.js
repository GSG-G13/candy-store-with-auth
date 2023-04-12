const {
  getCandies,
  addNewCandy,
  deleteCandies,
  getAddForm,
  getEditForm,
  getCandyById,
  updateCandies,
  getAdminCandy,
  getUserCandyPage,
} = require("./store/candy");
const { getCat } = require("./store/category");
const { getFlav } = require("./store/flaver");
const { oneFlav } = require("./store/oneFlavor");
const { oneCat } = require("./store/oneCategory");
const { checkUserAuth, checkUserRole, signup } = require("./auth");
module.exports = {
  getCandies,
  getCat,
  getFlav,
  addNewCandy,
  deleteCandies,
  getEditForm,
  getAddForm,
  getCandyById,
  oneFlav,
  oneCat,
  updateCandies,
  checkUserAuth,
  checkUserRole,
  signup,
  getAdminCandy,
  getUserCandyPage,
};
