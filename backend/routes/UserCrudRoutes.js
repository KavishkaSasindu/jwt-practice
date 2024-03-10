const express = require("express");
const UserCrudController = require("../controller/UserCrudController");

const router = express.Router();

router.post("/createUser", UserCrudController.createUser);
router.get("/allUsers", UserCrudController.getAllUsers);
router.get("/allUsers/:id", UserCrudController.findUser);

module.exports = router;
