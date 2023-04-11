const {getCategories} = require('../../database/queries/categories');
const getCat = (req,res) =>{
getCategories()
.then(result=>{res.json(result.rows)})
.catch(err=>console.log('err',err));
};

module.exports = {getCat};