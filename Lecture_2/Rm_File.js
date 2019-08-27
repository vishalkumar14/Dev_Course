#!/usr/bin/env node

var os = require('os');
var fs = require('fs');

var fileName = process.argv[2];

if(fileName != undefined){

    if(fs.existsSync(fileName) === true){
        fs.unlinkSync(fileName);
    }
    else{
        console.log("File Not Found");
    }
}

else{
    console.log("Please enter a exits file name");
}