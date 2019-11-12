// Requiring Express Module
const express = require("express");
// Body Parser is used for parsing the req url and simplfying the body parameters values and params value 
// in a easy to handle manner
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter = require("./router/viewRouter");

app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "views");

app.use("/", viewRouter);
app.use("/api/user", userRouter);
app.use("/api/plan", planRouter);

module.exports = app;
