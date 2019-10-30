const express = require("express");
const planRouter = express.Router();
const {
  getAllPlans,
  createPlan,
  getPlan,
  updatePlan,
  deletePlan
} = require("../controller/planController");

planRouter
  .route("")
  .get(getAllPlans)
  .post(createPlan);

planRouter
  .route("/:id")
  .get(getPlan)
  .patch(updatePlan)
  .delete(deletePlan);

module.exports = planRouter;
