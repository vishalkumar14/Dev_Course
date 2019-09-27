function isOdd(val) {
  return val % 2 !== 0;
}

function util(arr, isOdd) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (isOdd(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(util([5, 8, 14, 17, 23, 6, 8], isOdd));
