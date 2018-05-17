const express = require('express');
const app = express();
var mysql = require('mysql');

server = app.listen(3000, function () {
    console.log('Server is listening on port 3000.')
});
const io = require('socket.io').listen(server);

app.get('/', function (req, res) {
    console.log("connetion!")
});

app.get('/test', function (req, res) {
	var con = mysql.createConnection({
	  host: XXXXX,
	  user: XXXXX,
	  password: XXXXX,
	  database: XXXXX,
	  port: XXXXX
	});

    var time = req.query.time;
    var soilHumidity = req.query.soilHumidity;

    con.connect(function(err) {
	  if(err) throw err;	
	  console.log("Connected!");

	  var sql = "INSERT INTO tessel (Time, soilHumidity) VALUES ('"+time+"','"+soilHumidity+"')";
	  con.query(sql, function (err, result) {
	  		if (err) throw err;
			console.log("1 record inserted into databse ! ");
            con.end();
	  });
      
	});
    console.log(time+" "+soilHumidity);
});



	
