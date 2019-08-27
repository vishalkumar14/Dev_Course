/**
  
    **  Never mutate the global variables and objects

    ** 


 */


// Function Statement

function SayHi() {
  console.log("Hi all");
}
SayHi();

// Function Expression

var add = function(a, b) {
  return a + b;
};
console.log(add(3, 4));

// Passing variable, objects and functions as argument to the function
function greeter(variable) {
  return "Hi " + variable; // return "Hi " + variable();
}

console.log(greeter(4));
console.log(greeter("I am String"));

console.log(
  greeter(function() {
    return "I am also a Variable";
  })
);

function getFirstName(name) {
  return name.split(" ")[0];
}
function getLastName(name) {
  return name.split(" ")[1];
}
function greeter2(fullName, fn) {
  console.log("Hi " + fn(fullName));
}

greeter2("Steve Rogers", getFirstName);
greeter2("Steve Rogers", getLastName);
