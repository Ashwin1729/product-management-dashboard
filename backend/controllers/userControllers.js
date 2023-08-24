const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateJWT = require("../config/generateJWT");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, username, confirmPassword } = req.body;

  if (!name || !email || !password || !username || !confirmPassword) {
    res.status(400);
    throw new Error("Please enter all the required fields");
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Password and the password confirmed should be same");
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
    username,
    password: hashedPassword,
  });

  const data = result.toJSON();

  if (result) {
    res.status(201).json({
      id: data.id,
      full_name: data.full_name,
      email: data.email,
      username: data.username,
      token: generateJWT(data.id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await User.findAll({
    where: {
      email: email,
    },
  });

  let user;

  if (result.length > 0 && result[0].dataValues) {
    user = result[0].dataValues;
  }

  if (!user) {
    res.status(400);
    throw new Error("No such user exists. Please SignUp to continue!");
  }

  const matchedPassword = await bcrypt.compare(password, user.password);

  if (user && matchedPassword) {
    res.json({
      id: user.id,
      full_name: user.full_name,
      email: user.email,
      username: user.username,
      token: generateJWT(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = {
  registerUser,
  authUser,
};
