const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "DB",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    throw err;
  }

  console.log("connection sucess");
});

module.exports = db;
