var address = process.argv[2];
var http = require('http');
var buffer = ""
http.get(address, function(response) {
  response.setEncoding("utf-8");
  response.on("data", function (data) {buffer += data});
  response.on("end", function () {
    console.log(buffer.length);
    console.log(buffer)
  })
})

