const connection = require('../../config/connection');

const deleteCandy = (id)=>{
    let sql = {
        text:'delete from candy where id = $1',
        values:[id]
    }
    return connection.query(sql);
};
module.exports = deleteCandy;