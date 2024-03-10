const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create a jwt
const createToken = (id) => {
  return jwt.sign({ id }, "token", { expiresIn: 60 * 60 * 1000 * 24 });
};

// createUser signUp
const signUpUser = async (request, response) => {
  const { username, email, password } = request.body;

  try {
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save user in db
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    if (user) {
      // generate a token
      const token = createToken(user._id);

      // store token in a cookie
      const cookie = response.cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24,
      });
      console.log(cookie);
      return response.status(201).json({
        message: "User created success",
        data: user,
        token: token,
      });
    } else {
      return response.status(400).json({
        message: "User not created",
        error: error.message,
      });
    }
  } catch (error) {
    if (error) {
      return response.status(404).json({
        message: "error",
        error: error.message,
      });
    }
  }
};

module.exports = { signUpUser };
