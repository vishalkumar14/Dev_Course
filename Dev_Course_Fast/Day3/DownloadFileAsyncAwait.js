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

var arrImgs = [
  "http://google/logo.png",
  "http://google/banner.png",
  "http://google/promo.png"
];

// Promise.all(arrImgs.map(downloadFile))
//   .then(function(dFiles) {
//     return Promise.all(dFiles.map(compressFile));
//   })
//   .then(function(cFiles) {
//     return Promise.all(cFiles.map(uploadFile));
//   })
//   .then(function(uData) {
//     uData.map(function(uData) {
//       console.log(uData);
//     });
//   });

async function Helper() {
  var dFiles = await Promise.all(arrImgs.map(downloadFile));
  var cFiles = await Promise.all(dFiles.map(compressFile));
  var uFiles = await Promise.all(cFiles.map(uploadFile));

  uFiles.map(function(uData) {
    console.log(uData);
  });
}

Helper();