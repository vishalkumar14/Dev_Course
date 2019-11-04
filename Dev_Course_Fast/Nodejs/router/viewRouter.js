const express = require("express");
const viewRouter = express.Router();
const {
  logIn,
  signUp,
  plan,
  planPage,
  reset,
  forgetPassword,
  userPage
} = require("../controller/viewController");

viewRouter.route("/logIn").get(logIn);
viewRouter.route("/signUp").get(signUp);
viewRouter.route("/plan").get(plan);
viewRouter.route("/planPage").get(planPage);
viewRouter.route("/reset").get(reset);
viewRouter.route("/forgetPassword").get(forgetPassword);
viewRouter.route("/userPage").get(userPage);

module.exports = viewRouter;
