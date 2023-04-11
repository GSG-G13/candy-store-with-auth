const {getFlavers} = require('../../database/queries/flavors');
const getFlav = (req,res) =>{
    getFlavers()
    .then(result=>{res.json(result.rows)})
    .catch(err=>console.log('err',err));
    };


module.exports = {getFlav};
