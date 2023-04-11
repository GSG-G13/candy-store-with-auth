const dbConnection = require('../../config/connection');

const getUsers = () => dbConnection.query('select * from users');
module.exports = getUsers;