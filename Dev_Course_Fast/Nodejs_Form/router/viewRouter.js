const express = require("express");
const viewRouter = express.Router();
const {
  login,
  signup,
  productPage,
  allplans,
  resetPassword,
  forgetPassword,
  userPage
} = require("../controller/viewController");

viewRouter.route("/login").get(login);
viewRouter.route("/signup").get(signup);
viewRouter.route("/productPage").get(productPage);
viewRouter.route("/allplans").get(allplans);
viewRouter.route("/resetpassword/:id").get(resetPassword);
viewRouter.route("/forgetpassword").get(forgetPassword);
viewRouter.route("/userPage").get(userPage);

module.exports = viewRouter;
