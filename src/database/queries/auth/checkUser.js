const {dbConnection} = require('../../config/connection');
const checkUser =(username)=>
{
  let sql={
    text:"select * from users where username =$1",
    values:[username] 
  }
  return dbConnection.query(sql);  // return a promise we handle it in routes
}
// const getUsers = (userName) => dbConnection.query('select * from users where username =$1',{userName});
module.exports = {checkUser};