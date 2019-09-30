
function downloadFile(url) {
  console.log("Downloading file from  " + url);
  var path = "C:\\Downloads\\";
  var img = url.split("/").pop();
  var dimgPath = path + img;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(dimgPath);
    }, 3000);
  });
}
function compressFile(dimgPath) {
  console.log("We are compressing: " + dimgPath);
  var ext = dimgPath.split(".").pop(); //.jpg
  var cPath = dimgPath.split(".").shift(); //
  // console.log(ext);
  // console.log(cPath);
  var cImg = cPath + "-resized." + ext;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(cImg);
    }, 3000);
  });
}
// upload file
function uploadFile(cImg) {
  var upath = "http://pep/uploads";
  //  C:\Downloads\logo-resized.png
  var toupload = cImg.split("\\").pop();
  var uploadedImg = upath + "/" + toupload;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(uploadedImg);
    }, 3000);
  });
}
// calls

// var compressPromise = downloadFile("http://google.com/logo.png").then(
//   function downloaded(dimgPath) {
//     console.log("File downloaded at " + dimgPath);
//     return compressFile(dimgPath);
//   }
// );

// var uploadPromise = compressPromise.then(function(cImg) {
//   return uploadFile(cImg);
// });

// uploadPromise.then(function(uIMg) {
//   console.log(uIMg);
// });

var arrImgs = [
  "http://google/logo.png",
  "http://google/banner.png",
  "http://google/promo.png"
];

Promise.all(arrImgs.map(downloadFile))
  .then(function(dFiles) {
    return Promise.all(dFiles.map(compressFile));
  })
  .then(function(cFiles) {
    return Promise.all(cFiles.map(uploadFile));
  })
  .then(function(uData) {
    uData.map(function(uData) {
      console.log(uData);
    });
  });

// console.log(thenkiValue);

// url:http://google.com/logo.png
// output:
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
// We are compressing: C:\Downloads\logo.png
// File compressed to: C:\Downloads\logo-resized.png
// Uploading to: http://pep/uploads
// File successfully uploaded to: http://pep/uploads/logo-resized.png
// Task completed
