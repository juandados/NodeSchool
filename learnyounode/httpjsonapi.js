var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (request, response) {
  if (request.method !== 'GET') {
    return res.end('HTTP verb not valid')
  }

  var route = url.parse(request.url, true, true)
  response.writeHead(200, { 'Content-Type': 'application/json' })

  if(route.pathname == '/api/parsetime'){
    var iso = route.query.iso;
    var date = new Date(iso)
    var result ={hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}
    response.end(JSON.stringify(result))
  }

  if(route.pathname == '/api/unixtime'){
    var iso = route.query.iso;
    var date = new Date(iso)
    var result = {unixtime: date.getTime()}
    response.end(JSON.stringify(result))
  }


})

server.listen(port)
