const express = require("express");
const UserCrudController = require("../controller/UserCrudController");

const router = express.Router();

router.post("/createUser", UserCrudController.createUser);
router.get("/allUsers", UserCrudController.getAllUsers);
router.get("/allUsers/:id", UserCrudController.findUser);
router.put("/updateUser/:id", UserCrudController.updateUser);
router.delete("/deleteData/:id", UserCrudController.deleteData);

module.exports = router;
