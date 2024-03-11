const express = require("express");
const UserController = require("../controller/UserAuthController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signUp", UserController.signUpUser);
router.post("/signIn", UserController.signInUser);

module.exports = router;
