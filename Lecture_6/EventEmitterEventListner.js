var event = require("events");

var myEmitter = new event();

myEmitter.on("myevent", function() {
  console.log("My Event has Occurred");
});

myEmitter.on("myevent", function() {
  console.log("My Event has Occurred again");
});

myEmitter.on("myevent", function(a, b) {
  console.log("My Event Product Event Occurred " + a * b);
});

myEmitter.on("anotherEvent", function() {
    console.log("My Another Event has Occurred");
    myEmitter.emit("myevent", 4, 5);
  });


myEmitter.emit("anotherEvent");
