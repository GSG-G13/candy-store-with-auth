const express = require("express");
const {getCandies,addNewCandy, getCat, getFlav,deleteCandies,getAddForm,oneFlav, oneCat} = require("../controller");

const router = express.Router();

router.get("/candies", getCandies);
router.post("/add_candy", addNewCandy);
router.delete("/delete/:id",deleteCandies);
router.get("/categories",getCat);
router.get("/flavors",getFlav);
router.get("/addCandyForm",getAddForm);
router.get("/oneFlav/:flavor",oneFlav);
router.get("/oneCat/:category",oneCat);

module.exports = router;