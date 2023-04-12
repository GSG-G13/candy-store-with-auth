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
router.post("/signup", signupController);
router.get("/adminCandy", getAdminCandy);
router.get("/login", getLoginPage);
router.get("/userCandyStore", getUserCandyPage); //user candy store.
router.post("/login", checkUserAuth, checkUserRole);

router.get("/addCategory", addCategoryPage);
router.post("/addCategory", addNewCategory);

router.get("/addFlavor", addFlavorPage);
router.post("/addFlavor", addNewFlavor);
/* router.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500', '500.html'));
  next();
});
router.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404', '404.html'));
}); */

module.exports = router;
