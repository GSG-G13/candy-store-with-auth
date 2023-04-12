const express = require("express");
const {
  checkUserRole,
  getLoginPage,
} = require("../controller/auth/loginController");
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
  getAdminCandy,
  getUserCandyPage,
  addNewCategory,
  addCategoryPage,
  addNewFlavor,
  addFlavorPage,
  logoutController,
} = require("../controller");
const signupController = require("../controller/auth/signupController");
const login = require("../controller/auth/loginController/loginController");

const router = express.Router();

router.get("/candies", getCandies);
router.post("/add_candy", checkUserRole, addNewCandy);
router.put("/updateCandy/:id", checkUserRole, updateCandies);
router.delete("/delete/:id", checkUserRole, deleteCandies);
router.get("/editCandyForm/:id", checkUserRole, getEditForm);
router.get("/candy/:id", getCandyById);
router.get("/categories", getCat);
router.get("/flavors", getFlav);
router.get("/addCandyForm", checkUserRole, getAddForm);
router.get("/oneFlav/:flavor", oneFlav);
router.get("/oneCat/:category", oneCat);
router.post("/signup", signupController);
router.get("/adminCandy", checkUserRole, getAdminCandy);
router.get("/login", getLoginPage); //???????
router.get("/userCandyStore", getUserCandyPage); 
router.post("/login", login);
router.get("/logout", logoutController);

router.get("/addCategory", addCategoryPage); //admin
router.post("/addCategory", addNewCategory); //admin

router.get("/addCategory", checkUserRole, addCategoryPage);
router.post("/addCategory", checkUserRole, addNewCategory);

router.get("/addFlavor", checkUserRole, addFlavorPage);
router.post("/addFlavor", checkUserRole, addNewFlavor);

module.exports = router;
