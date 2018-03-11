var net = require('net')
var port = process.argv[2]


// https://www.w3schools.com/jsref/jsref_gethours.asp
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var server = net.createServer(function (socket) {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()

  var data = "" + year + "-" + addZero(month) + "-" + addZero(day) + " " + addZero(hour) + ":" + addZero(minute) + "\n"

  socket.end(data)
})

server.listen(port)
