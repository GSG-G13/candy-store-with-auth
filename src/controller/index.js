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
const { getCat, addNewCategory, addCategoryPage } = require("./store/category");
const { getFlav, addNewFlavor, addFlavorPage } = require("./store/flaver");
const { oneFlav } = require("./store/oneFlavor");
const { oneCat } = require("./store/oneCategory");
const { checkUserAuth, checkUserRole, signup,logoutController } = require("./auth");
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
  addNewCategory,
  addCategoryPage,
  addNewFlavor,
  addFlavorPage,
  logoutController
};
