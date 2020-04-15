const mongoose=require('mongoose');
var dataSchema=new mongoose.Schema({
  strength: Number,
  cord: String,  
})

module.exports=mongoose.model("Data",dataSchema);