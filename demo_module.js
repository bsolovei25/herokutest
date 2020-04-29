var mysql = require('mysql');
var express = require("express");
//var mysql = require('./node_modules/mysql/index.js');

var myvariable;

/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"mydb"
});*/


var con = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b04aeb8f8cadb3",
  password: "1a305679",
  database:"heroku_7ac9d03fb56fb24"
});



con.connect(function(err) {
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
});

exports.MyFunc= function(){
  return myvariable;
}


