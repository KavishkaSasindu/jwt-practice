const UserCrudModel = require("../models/UserCrud");

// create User
const createUser = async (request, response) => {
  const { firstName, lastName, address, email, contact } = request.body;
  try {
    const user = await UserCrudModel.create({
      firstName,
      lastName,
      address,
      email,
      contact,
    });
    if (user) {
      return response.status(201).json({
        message: "user created",
        data: {
          id: user._id,
          email: user.email,
        },
      });
    } else {
      return response.status(404).json({
        message: "user not created",
      });
    }
  } catch (error) {
    if (error) {
      return response.status(400).json({
        message: "error",
        error: error.message,
      });
    }
  }
};

module.exports = { createUser };
