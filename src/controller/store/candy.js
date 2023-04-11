const {getCandy,addCandy, deleteCandy} = require('../../database/queries/candy');
const { join }= require('path');
const getCandies = (req, res) => {
    getCandy()
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => console.log("err:", err));
  };

  const addNewCandy = (req,res)=>{
    const candyInfo = req.body;
    addCandy(candyInfo)
    .then(() => res.redirect("/"))
    .catch(err => console.log("err:", err));
  }

  const deleteCandies = (req,res)=>{
    deleteCandy(req.params.id)
    .then(() => res.redirect("/") )//
    .catch(err => console.log("err:", err));
  };


  const getAddForm=(req,res)=>{
    res.sendFile(join(__dirname,'..','..','..','public','addCAndyForm.html'));
  }
  
  module.exports = {getCandies,addNewCandy,deleteCandies,getAddForm};