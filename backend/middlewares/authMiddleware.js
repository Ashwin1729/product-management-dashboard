const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

const auth = asyncHandler(async (req, res, next) => {
  let decodedToken;

  const requestAuth = req.headers.authorization;

  if (requestAuth && requestAuth.startsWith("Bearer")) {
    try {
      const token = requestAuth.split(" ")[1];

      decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const fetchedUser = await User.findAll({
        where: {
          id: decodedToken.id,
        },
      });

      if (fetchedUser.length > 0 && fetchedUser[0].dataValues) {
        req.user = fetchedUser[0].dataValues;
      }

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!decodedToken) {
    res.status(401);
    throw new Error("Not authorized, no valid token");
  }
});

module.exports = { auth };
