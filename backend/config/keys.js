const dotenv = require("dotenv")
// import dotenv from dotenv
dotenv.config()
module.exports = {
    mongoURI:process.env.mailwithus_uri,
    secretOrKey: "secret"
  };