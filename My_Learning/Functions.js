const sum = function(x) {
    let xx=x;
    "use strict";
    return function sum(y, z) {
      const args = [ xx, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  };
  //console.log(sum(1, 2, 3)); // 6
  const inner=sum(1);
  console.log(inner(4,5));
  