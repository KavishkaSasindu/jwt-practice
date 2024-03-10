const express = require("express");
const UserCrudController = require("../controller/UserCrudController");

const router = express.Router();

router.post("/createUser", UserCrudController.createUser);
router.post("/allUsers", UserCrudController.getAllUsers);

module.exports = router;
