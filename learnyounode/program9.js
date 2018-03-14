var http = require("http")
var addresses = process.argv.slice(2, 100);
var responses = {};
var completed_strems = 0;
for (address in addresses){
  http.get(addresses[address], function(response){
    response.setEncoding("utf-8");
    response.on("data", function(data){
        addr = "http://" + response.socket._httpMessage._header.match(/localhost:\d+/)[0]
        responses[addr] = (responses[addr] || "") + data;
      });
    response.on("end", function(){
        completed_strems++;
        if (completed_strems == addresses.length){
          for (addr in addresses){
            console.log(responses[addresses[addr]])
          }
        }
      });
  });
}
