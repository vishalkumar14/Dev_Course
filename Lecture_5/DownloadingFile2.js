function downloader(url, downloaded) {
  console.log("Downloading file from: " + url);

  var path = "C:\\Download\\";

  setTimeout(function() {
    var downloadedPath = downloaded(path, url);

    compressFile(downloadedPath, compressed);
  }, 3000);
}

function downloaded(path, url) {
  var comp = url.split("/");

  var status = path + comp[comp.length - 1];

  console.log("File is saved at : " + status);

  console.log();

  return status;
}

function compressFile(filePath, compressed) {
  console.log("We are Compressing File: " + filePath);

  var path = "C:\\Download\\";

  setTimeout(function() {
    var compressedPath = compressed(path, filePath);

    uploadFile(compressedPath, uploaded);
  }, 3000);
}

function compressed(path, url) {
  var comp = url.split("\\");

  var name = comp[comp.length - 1].split(".");

  var status = path + name[0] + "-resized." + name[1];

  console.log("File is Compressed to : " + status);

  console.log();

  return status;
}

function uploadFile(diskPath, uploaded) {
  console.log("Uploading to : " + diskPath);

  var path = "http://pep/uploads/";

  setTimeout(function() {
    uploaded(path, diskPath);
  }, 3000);
}

function uploaded(path, url) {
  var comp = url.split("\\");

  var status = path + comp[comp.length - 1];

  console.log("File is Uploaded to : " + status);

  console.log();

  return status;
}

console.log();

var downloadingUrl = "https://stackoverflow.com/questions.png";

downloader(downloadingUrl, downloaded);
