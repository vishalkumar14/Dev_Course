function sum(x, y) {
  return x + y;
}
function multi(x, y) {
  return x * y;
}
function diff(x, y) {
  return x - y;
}

function number(x, y, fn) {
  return fn(x, y);
}

console.log(number(3, 4, sum));
console.log(number(3, 4, diff));
console.log(number(3, 4, multi));
