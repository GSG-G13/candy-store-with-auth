const {oneCategory} = require('../../database/queries/oneCategory');
const oneCat = (req,res) =>{
    const categoryName = req.params.category;
    oneCategory(categoryName)
    .then(result=>res.json(result.rows))
    .catch(err=>console.log('err',err));
    };


module.exports = {oneCat};
