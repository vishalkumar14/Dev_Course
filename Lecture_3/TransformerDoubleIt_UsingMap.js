function doubleIt(value) {
  return 2 * value;
}

function Transformer(arr, fn) {
  var res = [];
  for (var i = 0; i < arr.length; ++i) {
    res.push(fn(arr[i]));
  }
  return res;
}

var A = [5, 8, 14, 17, 23, 6, 8];

console.log(Transformer(A, doubleIt));

// Using Map Function
console.log(A.map(doubleIt));
