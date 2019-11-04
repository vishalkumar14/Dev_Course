const express = require("express");
const app = express();

const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter = require("./router/viewRouter");

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "views");

app.use("/", viewRouter);
app.use("/api/user", userRouter);
app.use("/api/plan", planRouter);

module.exports = app;

