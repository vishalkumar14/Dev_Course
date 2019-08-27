#!/usr/bin/env node

var os = require("os");
var fs = require("fs");

var FileName = process.argv[2];

if (FileName != undefined) {
  if (fs.existsSync(FileName) === false) {
    fs.writeFileSync(FileName, "//" + FileName);
  } else {
    console.log("File Already Exists");
  }
} else {
  console.log("Please Enter a Name");
}
