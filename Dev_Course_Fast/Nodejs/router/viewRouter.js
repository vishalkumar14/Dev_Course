const express = require("express");
const viewRouter = express.Router();
const {
  login,
  signup,
  productPage,
  allplans,
  reset,
  forgetPassword,
  userPage
} = require("../controller/viewController");

viewRouter.route("/login").get(login);
viewRouter.route("/signup").get(signup);
viewRouter.route("/productPage").get(productPage);
viewRouter.route("/allplans").get(allplans);
viewRouter.route("/reset").get(reset);
viewRouter.route("/forgetPassword").get(forgetPassword);
viewRouter.route("/userPage").get(userPage);

module.exports = viewRouter;
