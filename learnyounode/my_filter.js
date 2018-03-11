var fs = require('fs');

module.exports = function(path, ext, callback) {
  fs.readdir(path, function(err, files){
    if(err) return callback(err);
    var result = files.filter(function(file){ return file.indexOf("."+ext) > -1; });
    return callback(null, result);
  })
}
