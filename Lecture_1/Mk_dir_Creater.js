#!/usr/bin/env node

var os = require("os");
var fs = require("fs");

var folderName = "Lecture";

if (folderName != undefined) {
  for (i = 0; i < 1; ++i) {
    if (fs.existsSync(folderName + i) === false) {
      fs.mkdirSync(folderName + i);
    } else {
      console.log("Folder Already exits");
    }
  }
} else {
  console.log("Please Enter the Input");
}
