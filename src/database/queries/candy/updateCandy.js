const connection = require("../../config/connection");

const updateCandy = (id, data) => {
  const { name, quantity, img_url, price, category_id, flavor_id } = data;
  let sql = {
    text: "update candy set name=$1,quantity=$2,img_url=$3,price=$4,category_id=$5,flavor_id=$6 where id = $7",
    values: [name, quantity, img_url, price, category_id, flavor_id, id],
  };
  return connection.query(sql);
};
module.exports = updateCandy;
