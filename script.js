var PORT = process.env.PORT || 5000;
var http = require('http');
var express = require('express');
var app = express();
var dt = require('./demo_module.js');

app.listen(PORT,()=>{
  console.log('Server has started')
})

app.get('/',(req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
})

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
}).listen(PORT);*/