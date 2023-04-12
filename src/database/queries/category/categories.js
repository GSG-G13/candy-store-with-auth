const dbConnection = require('../../config/connection');

const getCategories = () => dbConnection.query('select * from category');
module.exports = {
  getCategories,
};
