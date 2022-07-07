var mysql = require("mysql");
var express = require("express");


var app = express();

var connectionString = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'stargase',
    database: 'northwind'
});

app.get("/category", (req, res)=>{
    connectionString.connect((err)=>{
        if(!err){
            connectionString.query("select * from tblcategory", (err, records, fields)=>{
                if(!err){
                    res.send(records);
                }
            })
        }
    })
});

app.get("/products", (req, res)=>{
    connectionString.connect((err)=>{
        if(!err){
            connectionString.query("select * from tblproducts", (err, records, fields)=>{
                if(!err){
                    res.send(records);
                }
            })
        }
    })
})

app.listen(4600);
console.log("Server Connected http://localhost:4600");