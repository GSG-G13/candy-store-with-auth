const express = require("express");
const {
  checkUserAuth,
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

router.post("/add_candy", addNewCandy); //admin

router.put("/updateCandy/:id", updateCandies); //admin
router.delete("/delete/:id", deleteCandies); //admin
router.get("/editCandyForm/:id", getEditForm); //admin
router.get("/candy/:id", getCandyById);
router.get("/categories", getCat);
router.get("/flavors", getFlav);
router.get("/addCandyForm", getAddForm); //admin
router.get("/oneFlav/:flavor", oneFlav);
router.get("/oneCat/:category", oneCat);
router.post("/signup", signupController);
router.get("/adminCandy", getAdminCandy); //admin
router.get("/login", getLoginPage);
router.get("/userCandyStore", getUserCandyPage);
// router.post("/login", checkUserAuth, checkUserRole);
router.post("/login", login);
router.get("/logout", logoutController);

router.get("/addCategory", addCategoryPage); //admin
router.post("/addCategory", addNewCategory); //admin

router.get("/addFlavor", addFlavorPage); //admin
router.post("/addFlavor", addNewFlavor); //admin

/* router.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500', '500.html'));
  next();
});
router.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404', '404.html'));
}); */

module.exports = router;
