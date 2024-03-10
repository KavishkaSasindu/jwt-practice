const express = require("express");
const UserCrudController = require("../controller/UserCrudController");

const router = express.Router();

router.post("/createUser", UserCrudController.createUser);

module.exports = router;
