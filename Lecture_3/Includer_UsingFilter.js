function isOdd(value) {
  return value % 2 != 0;
}

function Includer(arr, fn) {
  var res = [];

  for (var i = 0; i < arr.length; ++i) {
    if (fn(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

var A = [5, 8, 14, 17, 23, 6, 8];

console.log(Includer(A, isOdd));

//Using Filter Method
console.log(A.filter(isOdd));
