function multiplier(val1, val2) {
  return val1 * val2;
}

function Composer(arr, multi){
    let res = 1;
    for(let i = 0; i < arr.length; ++i){
        res = multi(res, arr[i]);
    }
    return res;
}

console.log(Composer([1,2,3,4,5], multiplier));
