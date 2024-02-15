import  Mongoose  from "mongoose";
let schema=new Mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},  
    password:{type:String,required:true,},
})

let model=Mongoose.model("user",schema)

export default model