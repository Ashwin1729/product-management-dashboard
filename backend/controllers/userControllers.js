const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateJWT = require("../config/generateJWT");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the required fields");
  }

  // user exist logic
  const findUser = await User.findAll({
    where: {
      email: email,
    },
  });

  if (findUser.length > 0) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await User.create({
    full_name: name,
    email,
    password: hashedPassword,
    pic,
  });

  const data = result.toJSON();

  if (result) {
    res.status(201).json({
      id: data.id,
      name: data.full_name,
      email: data.email,
      pic: data.pic,
      token: generateJWT(data.id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a user");
  }
});

const authUser = asyncHandler(async (req, res) => {});

module.exports = {
  registerUser,
  authUser,
};
