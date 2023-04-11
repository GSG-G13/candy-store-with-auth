const dbConnection = require('../../database/config/connection');

const getCategories = () => dbConnection.query('select * from category');
module.exports = {
  getCategories,
};
