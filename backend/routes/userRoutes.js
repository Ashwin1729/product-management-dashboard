const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/sign_up", registerUser);
router.post("/login", authUser);

module.exports = router;
