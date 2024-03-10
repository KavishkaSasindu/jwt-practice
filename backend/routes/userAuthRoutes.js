const express = require("express");
const UserController = require("../controller/UserAuthController");

const router = express.Router();

router.post("/signUp", UserController.signUpUser);

module.exports = router;
