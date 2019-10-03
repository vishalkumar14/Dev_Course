var ajax = require("./lib/filedownload");

var files = ["file1", "file2", "file3"];
var last = 0;
var tracker = {};

function getFile(file) {
  return new Promise(function(resolve, reject) {
    ajax.fakeAjax(file, function(data) {
      resolve(data);
    });
  });
}

function Helper() {
  var p1 = getFile("file1");
  var p2 = getFile("file2");
  var p3 = getFile("file3");

  p1.then(function(file) {
    console.log(file);
    p2.then(function(file) {
      console.log(file);
      p3.then(function(file) {
        console.log(file);
      });
    });
  });
}

async function Helper2() {
  var p1 = getFile("file1");
  var p2 = getFile("file2");
  var p3 = getFile("file3");

  console.log(await p1);
  console.log(await p2);
  console.log(await p3);
}

async function Helper3() {
  var FilesD = await Promise.all(files.map(getFile));
  console.log(FilesD);
}

function Helper4() {
  getFile("file1")
    .then(function(file) {
      console.log(file);
      return getFile("file2");
    })
    .then(function(file) {
      console.log(file);
      return getFile("file3");
    })
    .then(function(file) {
      console.log(file);
    });
}

// Helper();
Helper2();

