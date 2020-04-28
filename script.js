var http = require('http');
var dt = require('./demo_module.js');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
}).listen(8080);

/*exports.myDateTime = function () {
    return Date();
  };*/