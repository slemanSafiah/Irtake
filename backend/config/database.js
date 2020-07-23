const mysql = require("mysql");

const pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "123456",
  database: "project1_copy",
  connectionLimit: 10,
});

module.exports = pool;
