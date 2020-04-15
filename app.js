const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/HotSpot");
const bodyParser=require('body-parser');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var Data=require('./models/data');

app.post("/post",function(req,res){
    var strength=req.body.strength;
    var cord=req.body.cord;
    var newData={strength:strength,cord:cord};
    Data.create(newData,function(err,newlyCreated){
        if(err)
        {(
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    })
})