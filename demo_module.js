var mysql = require('mysql');

var myvariable;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"mydb"
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


