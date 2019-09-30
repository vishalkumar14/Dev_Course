function wait2Second() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Resolved After Two Second");
    }, 3000);
  });
}

function wait3Second() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Resolved After Three Second");
    }, 3000);
  });
}

async function helper() {
  console.log("Before");
  var p = wait2Second();
  var ans = await p;
  console.log(ans);
  var p1 = wait3Second();
  var ans1 = await p1;
  console.log(ans1);
  console.log("After");
}

helper();

for (var i = 1; i <= 100000; i++) {
//   console.log(i);
}
