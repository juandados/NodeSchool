var http = require("http")
var addresses = process.argv.slice(2, 4);
var responses = {};
var completed_strems = 0;
for (address in addresses){
  http.get(addresses[address], function(response){
    response.setEncoding("utf-8");
    response.on("data", function(data){
        responses[address] += data
      });
    response.on("end", function(){
        completed_strems++;
        if (completed_strems == 3){
          for (address in addresses) {
            console.log(responses[addresses])
          }
        }
      });
  });
}
