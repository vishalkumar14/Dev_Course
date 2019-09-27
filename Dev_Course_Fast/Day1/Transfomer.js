function Double(val) {
  return val * 2;
}

function util(arr, Double) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    res.push(Double(arr[i]));
  }
  return res;
}

console.log(util([1, 2, 3, 4, 5, 6], Double));
