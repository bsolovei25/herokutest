var PORT = process.env.PORT || 5000;
var http = require('http');
//var dt = require('./demo_module.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
}).listen(PORT);


/*


var PORT = process.env.PORT || 5000;
var http = require('http');
//var dt = require('./demo_module.js');

//var mysql = require('mysql');
//var express = require("express");
var express = require("./node_modules/express/index.js");
var app = express(); 
app.use(express.logger());
var mysql = require('./node_modules/mysql/index.js');

var myvariable;

/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"mydb"
});*/




/*connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql = "INSERT INTO TODOList (name,address) VALUES ('Michelle','Blue Lagune')";
  var addr = "Blue Lagune";
  var sql = "SELECT * from TODOList where address = "+mysql.escape(addr);
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    myvariable = JSON.stringify(result);
    //console.log();
  });
});*/
/*
app.get('/', function(request, response) {
  connection.query("INSERT INTO TODOList (name,address) VALUES ('Michelle','Blue Lagune')", function(err, result, fields) {
      if (err) {
          console.log('error: ', err);
          throw err;
      }
      myvariable = JSON.stringify(result);
      console.log(myvariable);
  });
});*/

/*exports.MyFunc= function(){
  return myvariable;
}*/





/*exports.myDateTime = function () {
    return Date();
  };*/

