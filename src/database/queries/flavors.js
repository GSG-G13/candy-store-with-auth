// eslint-disable-next-line linebreak-style
const dbConnection = require('../../database/config/connection');

const getFlavers = () => dbConnection.query('select * from flavor');
module.exports = { getFlavers };
