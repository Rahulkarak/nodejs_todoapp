import  mongoose  from "mongoose";

const schema=new mongoose.Schema({
    name:String,
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password:{
        required:true,
        type:String,
        select:false,
    },
    createdAt:{
        type:String,
        default:Date.now,
    },
});

export const User=mongoose.model("User",schema);