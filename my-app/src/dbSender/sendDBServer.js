var http = require('http');
var mysql = require('mysql');
var url = require('url')

//To be filled in
var HOST = "localhost";
var USER = "root";
var PASS = "";
var DB = "tttdb";

/*
 * creates a server at port 3001 to listen to possible SQL insertion requests
 */
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if(q.pathname == "/data") {
        var dataJSON = q.query.data;
        var con = mysql.createConnection({
            host: HOST,
            user: USER,
            password: PASS,
            database: DB
        });

        //create a table if it doesn't exist yet
        var createQuery = "CREATE TABLE IF NOT EXISTS TicTacToeData (id INT AUTO_INCREMENT PRIMARY KEY, data TEXT)";
        con.connect(function(err) {
            if (err) throw err;
            con.query(createQuery, function (err, result) {
                if (err) throw err;
            });

            //inserts the data into the table
            var addDataQuery = "INSERT INTO TicTacToeData (data) VALUES ('" + dataJSON + "')";
            con.query(addDataQuery, function (err, result) {
                if (err) throw err;
            });
        });
    }
}).listen(3001);