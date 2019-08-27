#!/usr/bin/env node

var os = require("os");
var fs = require("fs");

var folderName = process.argv[2];

if (folderName != undefined) {
  if (fs.existsSync(folderName) === true) {
      fs.rmdirSync(folderName);
  } else {
      console.log("Error 404");
      console.log("File Not Found!!!");
  }
} else {
  console.log("Please Enter the Input");
}
