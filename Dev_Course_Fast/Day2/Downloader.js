function downloadFile(url, downloader) {
  var path = "C:\\Downloads\\";
  console.log("File is Downloading From : " + url);
  setTimeout(function() {
    console.log(`File is Saved at: ${downloader(url, path)}`);
  }, 3000);
}

function downloader(url, path) {
  const comp = url.split("/");
  const savedPath = path + comp[comp.length - 1];
  return savedPath;
}

var url = "https://stackoverflow.com/Dog.jpeg";

downloadFile(url, downloader);
