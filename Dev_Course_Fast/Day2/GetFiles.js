var ajax = require("./lib/filedownload");

var files = [
  "file1",
  "file2",
  "file3",
  "file4",
  "file5",
  "file6",
  "file7",
  "file8",
  "file9"
];
var last = 0;
var tracker = {};

function getFile(file) {
  ajax.fakeAjax(file, function(data) {
    // console.log("Incoming File is " + file);
    receviedFile(file, data);
  });
}

function receviedFile(file, data) {
  if (tracker[file] === undefined) {
    tracker[file] = data;
  }

  for (let i = last; i < files.length; ++i) {
    last = i;
    if (tracker[files[i]] !== undefined) {
      if (tracker[files[i]] !== true) {
        console.log(tracker[files[i]]);
        tracker[files[i]] = true;
      }
    } else {
      return;
    }
  }
}

for (let i = 0; i < files.length; ++i) {
  getFile(files[i]);
}
