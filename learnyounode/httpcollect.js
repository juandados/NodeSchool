var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
  var dataArray = [];
  response.setEncoding('utf-8');
  response.on("data",  function(data){ dataArray.push(data)});
  response.on("error", console.error);
  response.on("end", function(cosa){
    var result = dataArray.join("");
    console.log(result.length);
    console.log(result);
  });
}).on("error", console.error);
