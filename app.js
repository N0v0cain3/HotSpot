const express=require('express');
const app=express();
const mongoose=require('mongoose');
 mongoose.connect("mongodb://localhost/HotSpot");
const bodyParser=require('body-parser');
// const connectDB=require('./config/db');
// connectDB(); 
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var Data=require('./models/data');


// ping: Number,
// lattitude: String,
// longitude:String,
// isp:String,
app.get("/",function(req,res){
    console.log("get");
})


app.post("/post",function(req,res){
    var ping=req.query.ping;
    var lat=req.query.lattitdue;
    var lon=req.query.longitude;
    var isp=req.query.isp;
    var down=req.query.down;
    var up=req.query.up;
    var newData={ping:ping,lattitude:lat,longitude:lon,isp:isp,down:down,up:up};
    console.log(lat);
    var data= new Data({newData});
    data.save();

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

app.listen(3000,function(err){
    console.log("server is running!");
});