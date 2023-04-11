const express = require("express");
const {getCandies,addNewCandy, getCat, getFlav,deleteCandies,getAddForm,oneFlav, oneCat} = require("../controller");
const {login} = require("../controller/auth/loginController");
const router = express.Router();

router.get("/candies", getCandies);
router.post("/add_candy", addNewCandy);
router.delete("/delete/:id",deleteCandies);
router.get("/categories",getCat);
router.get("/flavors",getFlav);
router.get("/addCandyForm",getAddForm);
router.get("/oneFlav/:flavor",oneFlav);
router.get("/oneCat/:category",oneCat);
router.post("/login",login);


router.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500', '500.html'));
  next();
});
router.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404', '404.html'));
});

module.exports = router;