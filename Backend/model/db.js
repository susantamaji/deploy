const mongo=require("mongoose")
const mySchema=new mongo.Schema({
    name:String,
    email:String,
    number:Number
})

const mymodel=mongo.model("users",mySchema)
module.exports=mymodel