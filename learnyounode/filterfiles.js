var myFilter = require('./my_filter.js');
var path = process.argv[2];
var ext = process.argv[3];

myFilter(path, ext, function(err, files){
  if(err) return console.err(err);
  files.forEach(function(file){
    console.log(file);
  });
});
