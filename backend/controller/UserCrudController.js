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

// get all users
const getAllUsers = async (request, response) => {
  try {
    const allUsers = await UserCrudModel.find({});
    if (allUsers) {
      return response.status(200).json({
        message: "fetched all users",
        data: allUsers,
      });
    } else {
      return response.status(404).json({
        message: "users are not found",
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

// find one user
const findUser = async (request, response) => {
  const { id } = request.params;
  try {
    const user = await UserCrudModel.findById(id);
    if (user) {
      return response.status(200).json({
        message: "user is found",
        data: user,
      });
    } else {
      return response.status(404).json({
        message: "user is not found",
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

// update user
const updateUser = async (request, response) => {
  const { id } = request.params;
  try {
    const user = await UserCrudModel.findByIdAndUpdate(id, request.body);
    if (user) {
      const updatedUser = await UserCrudModel.findById(id);
      if (updateUser) {
        return response.status(200).json({
          message: "updated user data",
          data: updatedUser,
        });
      }
      return response.status(201).json({
        message: "user is updated",
      });
    } else {
      return response.status(400).json({
        message: "user not updated",
      });
    }
  } catch (error) {
    return response.status(404).json({
      message: "error",
      error: error.message,
    });
  }
};

// delete userData
const deleteData = async (request, response) => {
  const { id } = request.params;
  try {
    const deleteUser = await UserCrudModel.findByIdAndDelete(id);
    if (deleteUser) {
      return response.status(200).json({
        message: "user deleted",
      });
    } else {
      return response.status(404).json({
        message: "user is not deleted",
      });
    }
  } catch (error) {
    return response.status(404).json({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = { createUser, getAllUsers, findUser, updateUser, deleteData };
