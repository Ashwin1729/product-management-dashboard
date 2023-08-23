const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
};

module.exports = generateJWT;
