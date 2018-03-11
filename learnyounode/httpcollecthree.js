var http = require('http');

var url = process.argv[2];

function fetchData(url, callback) {
  http.get(url, function(response){
    var dataArray = [];
    response.setEncoding('utf-8');
    response.on("data",  function(data){ dataArray.push(data)});
    response.on("error", callback);
    response.on("end", function(cosa){
      var result = dataArray.join("");
      console.log(result);
      callback(null, null);
    });
  }).on("error", callback);
}

fetchData(process.argv[2], function(_, _){
  fetchData(process.argv[3], function(_, _){
    fetchData(process.argv[4], function(_, _){})
  })
});
