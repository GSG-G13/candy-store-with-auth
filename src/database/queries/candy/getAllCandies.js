const connection = require("../../config/connection");

const getCandy = () => {
  return connection.query(`SELECT candy.id,candy.name,candy.quantity,candy.price,
    candy.img_url,category.name as category_name,
    flavor.name as flavor_name
    from category join candy on category.id = candy.category_id
    join flavor on flavor.id = candy.flavor_id`);
};

module.exports = getCandy;
