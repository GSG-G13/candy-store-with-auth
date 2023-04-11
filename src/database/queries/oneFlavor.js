const dbConnection = require('../../database/config/connection');

const oneFlavor = (theFlavor) => {
    const sql = {
        text: `SELECT candy.id,candy.name,candy.quantity,candy.img_url,flavor.name as flavor_name
         FROM candy JOIN flavor ON candy.flavor_id = flavor.id WHERE flavor.name = $1`,
        values: [theFlavor]
      };
      
return dbConnection.query(sql);
}


module.exports = { oneFlavor };

