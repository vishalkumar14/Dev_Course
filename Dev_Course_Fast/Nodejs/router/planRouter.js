const express = require("express");
const planRouter = express.Router();
const {
  getAllPlans,
  createPlan,
  getPlan,
  updatePlan,
  deletePlan,
  addqueryParams
} = require("../controller/planController");

const {
  signup,
  login,
  protectroute,
  isLoggedIn,
  isAuthorised
} = require("../controller/authController");

planRouter
  .route("")
  .get(protectroute, getAllPlans)
  .post(protectroute, isAuthorised(["admin, restaurant"]), createPlan);

planRouter.route("/best-5-plans").get(addqueryParams, getAllPlans);

planRouter
  .route("/:id")
  .get(getPlan)
  .patch(updatePlan)
  .delete(deletePlan);

module.exports = planRouter;
