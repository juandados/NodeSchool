var port_number = Number(process.argv[2]);
var net = require('net');
var server = net.createServer( function listener(socket){
  function zero_filler(original_str, final_length){
    filled_string = "";
    for (i = 1; i <= (final_length - original_str.length); i++) {
      filled_string += "0";
    }
    return filled_string + original_str;
  }
  date = new Date()
  YYYY = zero_filler(String(date.getFullYear()),4);
  MM = zero_filler(String(date.getMonth() + 1),2); // starts at 0 
  DD = zero_filler(String(date.getDate()),2);      // returns the day of month  
  hh = zero_filler(String(date.getHours()),2);
  mm = zero_filler(String(date.getMinutes()),2);
  socket.end(`${YYYY}-${MM}-${DD} ${hh}:${mm}\n`);
})
server.listen(port_number);
