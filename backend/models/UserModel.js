const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: [6, "Minimum length is 6"],
    required: true,
  },
});

const user = mongoose.model("users", UserModel);

module.exports = user;
