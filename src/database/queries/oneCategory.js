const dbConnection = require('../../database/config/connection');

const oneCategory = (theCategory) => {
    const sql = {
        text: "SELECT candy.id,candy.name,candy.quantity,candy.img_url,category.name as category_name FROM candy JOIN category ON candy.category_id = category.id WHERE category.name = $1",
        values: [theCategory]
      };

      return dbConnection.query(sql);
}


module.exports = { oneCategory };

