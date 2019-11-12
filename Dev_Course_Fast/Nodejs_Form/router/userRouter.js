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

const {
  signup,
  login,
  protectroute,
  isAuthorised,
  updatePassword,
  forgetPassword,
  resetPassword,
  isLoggedIn,
  logout
} = require("../controller/authController");

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);

userRouter.route("/resetpassword").patch(resetPassword);
userRouter.route("/resetpassword").post(resetPassword);

userRouter.route("/forgetpassword").patch(forgetPassword);
userRouter.route("/forgetpassword").post(forgetPassword);

userRouter.route("/updatepassword").patch(protectroute, updatePassword);
userRouter.route("/updatepassword").post(protectroute, updatePassword);

userRouter
  .route("")
  .get(protectroute, isAuthorised(["admin"]), getAllUsers)
  .post(protectroute, checkInput, createUser);

userRouter
  .route("/:id")
  .get(protectroute, getUser)
  .patch(protectroute, updateUser)
  .delete(protectroute, deleteUser);

module.exports = userRouter;