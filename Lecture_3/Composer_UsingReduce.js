function multiplier(value1, value2) {
  return value1 * value2;
}

function composer(arr, fn) {
  var res = 1;
  for (var i = 0; i < arr.length; ++i) {
    res = fn(res, arr[i]);
  }
  return res;
}

var A = [1, 2, 3, 4, 5];

console.log(composer(A, multiplier));

//Using Reduce Function
console.log(A.reduce(multiplier, 1));
console.log(A.reduce(multiplier));
