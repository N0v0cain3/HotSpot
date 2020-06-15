const express=require('express');
const app=express();
const mongoose=require('mongoose');
var PORT=process.env.PORT||3000;
// mongoose.connect("mongodb://localhost/HotSpot");
const bodyParser=require('body-parser');
const connectDB=require('./config/db');
connectDB(); 
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var Data=require('./models/data');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Shivam:Shivammehta2001@cluster0-tnmyh.gcp.mongodb.net/test?retryWrites=true&w=majority";





    
app.get("/:id",function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var query = { isp: req.params.id };
        dbo.collection("datas").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });

    console.log("get");
    
})


app.post("/post",function(req,res){
    var ping=req.query.ping;
    var lat=req.query.latitude;
    var lon=req.query.longitude;
    var isp=req.query.isp;
    var down=req.query.down;
    var up=req.query.up;
    var newData={ping:ping,latitude:lat,longitude:lon,isp:isp,down:down,up:up};
    console.log(lat);
    // var data= new Data({newData});
    // data.save();
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var myquery = { lattitude: lat,
        longitude :lon };
        var newvalues = { $set: {ping: ping, down:down } };
        dbo.collection("datas").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        }); 
      });

    Data.create(newData,function(err,newlyCreated){
        if(err)
        {
            console.log(err);
        }
       else
       {
           res.send(newData);
       }
    })
});

app.listen(PORT,function(err){
    console.log("server is running!");
});
