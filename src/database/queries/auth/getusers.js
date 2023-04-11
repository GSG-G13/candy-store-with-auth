const dbConnection = require('../../database/config/connection');

const getUsers = () => dbConnection.query('select * from users');
module.exports = getUsers;