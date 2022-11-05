require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  dbPassword : process.env.DB_PASSWORD,
  dbUsername : process.env.DB_USERNAME,
  dbHost : process.env.DB_HOST,
  dbPort : process.env.DB_PORT,
  dbName : process.env.DB_NAME,
  dbConnection : process.env.DB_CONNECTION,


};

module.exports = { config };
