var mysql = require("mysql");
var express = require("express");
var cors = require("cors");

var app = express(); 


var connectionString = {
    host: "localhost",
    user: "root",
    password: "stargase",
    database: "northwind"
};

var con = mysql.createConnection(connectionString);

app.get("/products", (req, res)=>{
    con.connect((err)=>{
        if(!err){
            con.query("select * from tblproducts", (err, records, fields)=>{
                if(!err){
                    res.send(records);
                    res.end();
                }
            })
        }
    })
});

app.get("/categories", (req, res)=>{
    con.connect((err)=>{
        if(!err){
            con.query("select * from tblcategory",(err, records, fields)=>{
                if(!err){
                    res.send(records);
                    res.end();
                }
            })
        }
    })
});


app.listen(4500);
console.log("Server started http://127.0.0.1:4500");    
























