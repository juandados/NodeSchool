var http = require("http")
var addresses = process.argv.slice(2, 100);
var responses = {};
var completed_strems = 0;
for (address in addresses){
  http.get(addresses[address], function(response){
    response.setEncoding("utf-8");
    response.on("data", function(data){
        responses[addresses[address]] = (responses[addresses[address]] || "") + data;
      });
    response.on("end", function(){
        completed_strems++;
        console.log(Object.keys(responses))
        if (completed_strems == addresses.length){
          for (address in addresses) {
            //console.log(responses[addresses[address]])
            //console.log("eeeeeeee")
          }
        }
      });
  });
}
