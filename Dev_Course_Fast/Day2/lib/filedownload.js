exports.fakeAjax = function(url, cb) {
  var fake_responses = {
    file1: "The first  file's data",
    file2: "The second file's data",
    file3: "The third file's data ",
    file4: "The fourth  file's data",
    file5: "The fifth file's data",
    file6: "The six file's data ",
    file7: "The seven  file's data",
    file8: "The eight file's data",
    file9: "The nine file's data "
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
  console.log("Requesting: " + url);
  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
};
exports.trackCheckout = function(purchaseInfo, cb) {
    cb();
    cb();
    cb();
    cb();
    cb();
  
};


