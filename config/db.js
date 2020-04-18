const mongoose=require('mongoose');
const config =require('config');
const db=config.get('mongoURI');
const url="mongodb+srv://Shivam:Shivammehta2001@cluster0-tnmyh.gcp.mongodb.net/test?retryWrites=true&w=majority"
const connectDB=async()=>{
    try{
        await mongoose.connect(url,{
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
        console.log('MongoDB Connected ...')}
        catch(err){
            console.error(err.message);
            process.exit(1);
        }
    }
//connecting online
module.exports=connectDB;