#!/usr/bin/env node
// inbuilt module import
module.exports = function(input) {
  var os = require("os");
  var fs = require("fs");
  // Multiple inputs
  // console.log(process.argv.slice(2));
  // Single INputs
  // console.log(process.argv[2]);
  // console.log(os.cpus());

  var folderName = input;
  if (folderName != undefined) {
    if (fs.existsSync(folderName) == false) {
      fs.mkdirSync(folderName);
    } else {
      console.log("Folder already exist");
    }
  } else {
    console.log("Please enter any input");
  }
};
// console.log(folderName);
