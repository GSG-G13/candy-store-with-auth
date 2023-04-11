const {
  getCandies,
  addNewCandy,
  deleteCandies,
  getAddForm,
  getEditForm,
  getCandyById,
  updateCandies
} = require("./store/candy");
const { getCat } = require("./store/category");
const { getFlav } = require("./store/flaver");
const { oneFlav } = require("./store/oneFlavor");
const { oneCat } = require("./store/oneCategory");

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
  updateCandies
};
