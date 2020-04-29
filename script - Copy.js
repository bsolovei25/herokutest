var PORT = process.env.PORT || 5000;
var http = require('http');
var dt = require('./demo_module.js');




http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
}).listen(PORT);

/*exports.myDateTime = function () {
    return Date();
  };*/


  