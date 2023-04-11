const connection = require('../../config/connection');

const getCandyId = (id)=>{
    let sql = {
        text:'SELECT * from candy where id =$1',
        values:[id]
    }
    return connection.query(sql);
};

module.exports = getCandyId;