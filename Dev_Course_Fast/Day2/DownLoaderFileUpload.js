function DownloadFile(url, downloader) {
  var path = "C:\\Downloads\\";
  console.log("File is Downloading From: " + url);

  setTimeout(function() {
    const SavedPath = downloader(url, path);
    console.log("File is Downloaded at : " + SavedPath);
    console.log();
    CompressFile(SavedPath, compresser);
  }, 3000);
}

function downloader(url, path) {
  const comp = url.split("/");
  const savedPath = path + comp[comp.length - 1];
  return savedPath;
}

function compresser(url, FilePath) {
  const comp = url.split("\\");
  const name = comp[comp.length - 1].split(".");

  var CompressedPath = FilePath + name[0] + "_compressed." + name[1];
  return CompressedPath;
}

function CompressFile(FilePath, compresser) {
  console.log("Compressing the File : " + FilePath);
  var path = "C:\\Downloads\\";

  setTimeout(function() {
    const CompressedPath = compresser(FilePath, path);
    console.log("File is Compressed at : " + CompressedPath);
    console.log();
    UploadFile(CompressedPath, uploader);
  }, 3000);
}

function uploader(UploadPath, FilePath) {
  const comp = FilePath.split("\\");
  const UploadedPath = UploadPath + comp[comp.length - 1];

  return UploadedPath;
}

function UploadFile(FilePath, uploader) {
  console.log("Uploading the File : " + FilePath);
  var path = "http://pep/uploads/";

  setTimeout(function() {
    const UploadedPath = uploader(path, FilePath);
    console.log("File is Uploaded at : " + UploadedPath);
    console.log();
    console.log("Task is Completed");
    console.log();
  }, 3000);
}


console.log();

var downloadingUrl = "https://stackoverflow.com/questions.png";

DownloadFile(downloadingUrl, downloader);
