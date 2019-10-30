const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  checkInput,
  createUser,
  getUser,
  updateUser,
  deleteUser
} = require("../controller/userController");

userRouter
  .route("")
  .get(getAllUsers)
  .post(checkInput, createUser);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
