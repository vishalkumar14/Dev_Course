const userModel = require("../model/userModel");
const planModel = require("../model/planModel");

module.exports.homePage = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    res.status(200).render("home.pug", {
      title: "Home | OmniFood",
      user
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.login = async (req, res, next) => {
  try {
    res.status(200).render("Login.pug", {
      title: "Login | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.signup = async (req, res, next) => {
  try {
    res.status(200).render("SignUp.pug", {
      title: "Sign Up | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.productPage = async (req, res, next) => {
  try {
    res.status(200).render("productPage", {
      title: "Plan Page | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.allplans = async (req, res, next) => {
  try {
    const user = req.user;
    let plans = await planModel.find();
    res.status(200).render("planContainer", {
      title: "All Plans | OmniFood",
      plans: plans,
      user
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.resetPassword = async (req, res, next) => {
  try {
    res.status(200).render("resetPassword.pug", {
      title: "Reset Password | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.forgetPassword = async (req, res, next) => {
  try {
    res.status(200).render("forgetPassword.pug", {
      title: "Forget Password | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.userPage = async (req, res, next) => {
  try {
    const user = req.user;
    res.status(200).render("userPage.pug", { title: user.name, user });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.error404 = async (req, res, next) => {
  const user = req.user;
  if (user) {
    next();
  } else {
    res.status(404).render("404.pug");
  }
};
module.exports.wentWrong = async (req, res, next) => {
  res.status(404).render("WenWrong.pug");
};