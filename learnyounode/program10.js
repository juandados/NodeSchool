var port_number = Number(process.argv[2]);
var net = require('net');
var server = net.createServer( function listener(socket){
  socket.write("hdda");
  socket.pipe(socket);
  //socket.end(String(port_number));
})
server.listen(port_number,'127.0.0.1');
