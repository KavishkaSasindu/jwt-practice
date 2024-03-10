const express = require("express");
const UserController = require("../controller/UserAuthController");

const router = express.Router();

router.post("/signUp", UserController.signUpUser);
router.post("/signIn", UserController.signInUser);

module.exports = router;
