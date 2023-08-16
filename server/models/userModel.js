import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is Required"]
    },
    Email:{
        type:String,
        required:[true,"Name is Required"],
        unique:true
    },
    Password:{
        type:String,
        required:[true,"Name is Required"],
        minlength:[6,"Password must be atleast 6 characters"]
    },
    Batch: {
        type:String,
        required:true
    }
},
{timestamps:true}
) 
export default mongoose.model("Users",userSchema)