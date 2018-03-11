var fs = require('fs');
var file = fs.readFile(process.argv[2], function(err, content){
  if(err) {
    console.log(err);
  }
  console.log(content.toString().split("\n").length-1);
});
