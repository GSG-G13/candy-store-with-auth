const { readFileSync } = require("fs");
const { join } = require("path");
require("dotenv").config();
const {dbConnection} = require("./connection");

let sql;

const dbBuild = () => {
    if (process.env.NODE_ENV === "test") {
      sql = readFileSync(join(__dirname, "test_build.sql")).toString();
    } else if (process.env.NODE_ENV === "development") {
      sql = readFileSync(join(__dirname, "dev_build.sql")).toString();
    }else if (process.env.NODE_ENV === "production"){
     sql = readFileSync(join(__dirname, "build.sql")).toString();
    }
    return dbConnection.query(sql);
  };
  module.exports={ dbBuild };