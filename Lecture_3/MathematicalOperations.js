function sum(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function diff(a, b) {
  return a - b;
}

function UtilityFunction(x, y, fn) {
  return fn(x, y);
}

console.log(UtilityFunction(4, 3, diff));
console.log(UtilityFunction(4, 3, multi));
console.log(UtilityFunction(4, 3, sum));
