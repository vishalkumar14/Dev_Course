#!/usr/bin/env node

var os = require("os");
var fs = require("fs");


var interfaceObj = os.networkInterfaces();

var ipv6 = interfaceObj.en0[0].address;
var ipaddr = interfaceObj.en0[1].address;
var subnet = interfaceObj.en0[1].netmask;
var macAddr = interfaceObj.en0[1].mac;

console.log("IP Address ----- " + ipaddr);
console.log("IPv6 Address ----- " + ipv6);
console.log("Subnet ----- " + subnet);
console.log("Mac Address ----- " + macAddr);

