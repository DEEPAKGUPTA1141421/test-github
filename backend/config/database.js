const mongoose=require("mongoose");
const connectDb=()=>{
    const promiseReturByMongoose=mongoose.connect(process.env.MONGODB_URL);
    promiseReturByMongoose.then(()=>{
        console.log("connection Successful");
    }).catch((err)=>{
        console.log("connection unsuccesful");
    })
}
module.exports=connectDb;