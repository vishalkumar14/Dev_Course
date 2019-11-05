const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  checkInput,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updatePassword
} = require("../controller/userController");

const {
  signup,
  login,
  protectroute,
  isAuthorised
} = require("../controller/authController");

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);

userRouter
  .route("")
  .get(protectroute, isAuthorised(["admin"]), getAllUsers)
  .post(protectroute, checkInput, createUser);

userRouter.route("/updatePassword").patch(protectroute, updatePassword);

userRouter
  .route("/:id")
  .get(protectroute, getUser)
  .patch(protectroute, updateUser)
  .delete(protectroute, deleteUser);

module.exports = userRouter;
