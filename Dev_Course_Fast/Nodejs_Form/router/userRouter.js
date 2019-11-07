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
  resetPasswordForm,
  checkUser
} = require("../controller/authController");

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);

// userRouter.route("/resetpassword/:token").patch(resetPassword);
// userRouter.route("/resetpassword/:token").post(resetPassword);
userRouter.route("/resetpassword").patch(resetPasswordForm);
userRouter.route("/resetpassword").post(resetPasswordForm);

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
