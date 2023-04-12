const connection = require("../../config/connection");

const addFlavor = (Data) => {
  const { name, img_url } = Data;
  let sql = {
    text: "insert into flavor (name,img_url) values ($1,$2) returning id,name,img_url",
    values: [name, img_url],
  };
  return connection.query(sql);
};

module.exports = addFlavor;
