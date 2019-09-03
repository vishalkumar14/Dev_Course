function buildingFunction() {
  var arr = [];
  var j = 0;
  for (let i = 0; i < 3; ++i, ++j) {
    arr.push(function() {
      console.log(i+"  "+j);
    });
  }
  return arr;
}

var fn = buildingFunction();

fn[0]();
fn[1]();
fn[2]();

function buildingFunction2() {
  var arr = [];
  for (var i = 0; i < 3; ++i) {
    arr.push(
      (function() {
        console.log(i);
      })()
    );
  }
  return arr;
}

console.log("*************************");

// var fn2 = buildingFunction2();

// fn2[0];
// fn2[1];
// fn2[2];
