var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'chat',
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use(cors());

app.post("/", (req, res) => {
    console.log(req.body);
    const data=req.body;
    
    connection.connect();
 
    connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [data.name, data.password], function (error, results, fields){
      console.log('The solution is: ', results);
       res.send(results)
    });
    connection.end();
});
app.post("/signup", (req, res) => {
    console.log(req.body);
    const data=req.body;
    
    connection.connect();
 
    connection.query('insert into login (username,password) values(?,?)', [data.name, data.password], function (error, results, fields){
      console.log('The solution is: ', results);
       res.send(results)
    });
    connection.end();
});
