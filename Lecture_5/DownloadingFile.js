function downloader(url, downloaded) {
  console.log("Downloading file from: " + url);
  var path = "C:\\Download\\";
  setTimeout(function() {
    var status = downloaded(path, url);
    console.log("File is saved at : " + status);
  }, 3000);
}

function downloaded(path, url) {
  var comp = url.split("/");
  var status = path + comp[comp.length - 1];
  return status;
}

var url = "https://stackoverflow.com/questions";

downloader(url, downloaded);
