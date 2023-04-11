const express = require("express");
const {
  getCandies,
  addNewCandy,
  getCat,
  getFlav,
  deleteCandies,
  getAddForm,
  getEditForm,
  getCandyById,
  oneFlav,
  oneCat,
  updateCandies,
} = require("../controller");
const signupController = require("../controller/auth/signupController");

const router = express.Router();

router.get("/candies", getCandies);
router.post("/add_candy", addNewCandy);
router.put("/updateCandy/:id", updateCandies);
router.delete("/delete/:id", deleteCandies);
router.get("/editCandyForm/:id", getEditForm);
router.get("/candy/:id", getCandyById);
router.get("/categories", getCat);
router.get("/flavors", getFlav);
router.get("/addCandyForm", getAddForm);
router.get("/oneFlav/:flavor", oneFlav);
router.get("/oneCat/:category", oneCat);
router.post('/signup',signupController)

module.exports = router;
