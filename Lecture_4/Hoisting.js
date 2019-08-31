console.log(x);

var x;

function MyFun() {
  var x;
  x = 20;
  console.log(x);
  console.log("Line 4 --> " + x);

  if (true) {
    x = 30;
    x += 1;
    console.log("Line 13  --> " + x);
  }
  console.log(x);
}

x = 10;

MyFun();
console.log("Last  --> " + x);

console.log(global);
