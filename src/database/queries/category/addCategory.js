const connection = require("../../config/connection");

const addCategory = (data) => {
  const { name, img_url } = data;
  let sql = {
    text: "insert into category (name,img_url) values ($1,$2) returning id,name,img_url",
    values: [name, img_url],
  };
  return connection.query(sql);
};

module.exports = addCategory;
