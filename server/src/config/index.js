const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// Set the NODE_ENV to 'development' By default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  api: process.env.API,
  port: process.env.PORT,
  slowApi: process.env.SLOW_API 
};