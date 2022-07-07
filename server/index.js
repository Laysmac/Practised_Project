var express = require("express");
var cors = require("cors");
var { MongoClient } = require("mongodb");

var app = express();
var connectionString = "mongodb://127.0.0.1:27017";

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(cors());

app.get("/getusers", (req, res)=>{
    MongoClient.connect(connectionString, (err, clientObj)=>{
        if(!err){
            var database = clientObj.db("northwind");
            database.collection("tblregister").find({}).toArray((err, documents)=>{
                if(!err){
                    res.send(documents);
                    res.end();
                }
            })
        }
    })
});

app.post("/registeruser", (req, res)=>{
    var data = {
        Username: req.body.Username,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        Password: req.body.Password,
        City: req.body.City, 
        State: req.body.State,
        Postal: parseFloat(req.body.Postal),
        Address: req.body.Address,
        Payment: req.body.Payment
    };

    MongoClient.connect(connectionString, (err, clientObj)=>{
        if(!err){
            var database = clientObj.db("northwind");
            database.collection("tblregister").insertOne(data, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                }
            })
        }
    })
})


app.listen(4000);
console.log("Connected to http:localhost:4000");