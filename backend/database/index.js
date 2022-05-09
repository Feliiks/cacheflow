require("dotenv").config({ path: __dirname + "/.env" });

var mysql = require("mysql");

var platformConnection = mysql.createConnection({
  host: process.env.PLATFORM_DB_HOST,
  user: process.env.PLATFORM_DB_USER,
  password: process.env.PLATFORM_DB_PASSWORD,
  database: process.env.PLATFORM_DB_NAME,
});

platformConnection.connect();

module.exports = platformConnection;
