const connection = require('../../config/connection');

const addCandy = (candyData)=>{
    const { name, quantity,img_url,category_id,flavor_id } = candyData;
    let sql = {
        text:'insert into candy (name, quantity,img_url,category_id,flavor_id) values ($1,$2,$3,$4,$5) returning id,name,quantity,img_url,category_id,flavor_id',
        values:[name, quantity,img_url,category_id,flavor_id]
    }
    return connection.query(sql);
};

module.exports = addCandy;