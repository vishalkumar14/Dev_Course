var ajax = require("./lib/filedownload");
//***************************************
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

  console.log("Last UnPrinted is " + (last+1) + " Current File Number is " + file);

  if (tracker[file] === undefined) {
    // we can also write or typed " tracker[file] = data; " without if condition
    // because every incoming file is only coming first time
    tracker[file] = data; 
  }

  for (var i = last; i < files.length; ++i) {
    last = i;
    if (tracker[files[i]] !== undefined) {
      if (tracker[files[i]] !== true) {
        console.log(tracker[files[i]]);
        tracker[file] = true;
      }
    } else {
      return;
    }
  }

  console.log("Task Completed");
}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order

for(var f = 0; f < files.length; ++f){
  getFile(files[f]);
}

//output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// The first  file's data
// The second file's data
// The third file's data
// Complete
