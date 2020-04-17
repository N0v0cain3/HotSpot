const mongoose=require('mongoose');
var dataSchema=new mongoose.Schema({
  ping: Number,
  latitude:String,
  longitude:String,
  isp:String,
  ip:String,
  down:Number,
  up:Number
});

module.exports=mongoose.model("Data",dataSchema);