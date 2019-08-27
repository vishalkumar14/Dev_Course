#!/usr/bin/env node
var os = require("os");
var fs = require("fs");

var Names = fs.readdirSync("./");

console.log();
console.log();
console.log("**** CurrentDirectory ****");
console.log();

for (var idx = 0; idx < Names.length; ++idx) {
    
    var stats = fs.statSync("./" + Names[idx]);
  
    if (stats.isFile() === true) {
    console.log(Names[idx]);
  } else {
    Tree(Names[idx], "./" + Names[idx], "");
  }
}

function Tree(Dir, path, space) {
  var stats = fs.statSync(path);

  if (stats.isFile() === true) {
    console.log(space + Dir);
  } else {
    console.log(space + Dir);
    var DirNames = fs.readdirSync(path);
    console.log();

    for (var i = 0; i < DirNames.length; ++i) {
      Tree(DirNames[i], path + "/" + DirNames[i], space + " ");
    }

    console.log();
  }
}
