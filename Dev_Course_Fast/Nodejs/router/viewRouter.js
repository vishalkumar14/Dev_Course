const express = require("express");
const viewRouter = express.Router();
const {
  login,
  signup,
  productPage,
  allplans,
  resetPassword,
  forgetPassword,
  userPage,
  error404,
  wentWrong,
  homePage
} = require("../controller/viewController");

const { protectroute, isLoggedIn } = require("../controller/authController");

viewRouter.use(isLoggedIn);
viewRouter.route("").get(homePage);
viewRouter.route("/login").get(login);
viewRouter.route("/signup").get(signup);

viewRouter.route("/productPage").get(protectroute, productPage);

viewRouter.route("/allplans").get(allplans);

viewRouter.route("/resetpassword/:id").get(resetPassword);

viewRouter.route("/forgetpassword").get(forgetPassword);

viewRouter.route("/userPage").get(error404, userPage);

viewRouter.route("*").get(error404);

module.exports = viewRouter;
