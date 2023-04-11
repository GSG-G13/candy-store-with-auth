const {getCandies,addNewCandy,deleteCandies,getAddForm} = require('./store/candy');
const {getCat} = require('./store/category');
const {getFlav} = require('./store/flaver');
const {oneFlav} = require('./store/oneFlavor');
const {oneCat} = require('./store/oneCategory');

module.exports = {getCandies,getCat,getFlav,addNewCandy,deleteCandies,getAddForm,oneFlav,oneCat};

