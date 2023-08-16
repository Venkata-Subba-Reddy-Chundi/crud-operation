import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
export const getStudentController=async(req,res) => {
    let students;
    try{
        students=await userModel.find()
        console.log(students)
    }catch(e){

    }
    if(!students){
        res.satus(400).json({
            message:"Data Not Found"
        })
    }
    res.status(200).json({
        students:students
    })
}
export const postStudentController= async(req,res) => {
    const {Name,Email,Password,Batch}=req.body;
    let existingStudent;
    try{
        existingStudent=await userModel.findOne({Email})
    }catch(err){
        console.log(err)
    }
    if(existingStudent){
        return res.status(400).json({
            message:"User Already Exists!"
        })
    }
    // res.status(200).json(existingStudent)
    const hashedPassword=bcrypt.hashSync(Password)
    const newStudent=new userModel({
        Name:Name,
        Email:Email,
        Password:hashedPassword,
        Batch:Batch
    })
    try{
        await newStudent.save()
    }catch(err){
        console.log(err)
    }
    res.status(200).json({
        message:"New Student Info Added"
    })
}
export const deleteStudentController=async(req,res)=>{
    const id=req.params.id
    let studentId;
    try{
        studentId=await userModel.findByIdAndDelete(id)
    }catch(e){}
    if(!studentId){
        res.status(400).json({ 
            message:"User Not Found"
        })
    }
    res.status(200).json({
        message:"Student Deleted"
    })
}
export const updateStudentController=async(req,res)=>{
    const id=req.params.id
    // const {Name,Email,Password,Batch}=req.body
    // let studentId;
    // try{
    //     studentId=await userModel.findByIdAndUpdate(id,{
    //         Name,
    //         Email,
    //         Password,
    //         Batch
    //     })
    // }catch(e){}
    try{
        await userModel.findByIdAndUpdate(id,req.body)
        res.send("Updated Succesfully")
    }catch(err){
        res.send("error",err)
    }
}
export const getUpdateStudController=async(req,res)=>{
    let editedStudent;
    const id=req.params.id
    try{
        editedStudent=await userModel.findById(id)
        console.log(editedStudent)
        return res.status(200).json(editedStudent)
    }catch(e){console.log(e)}
    if(!editedStudent){
        res.status(400).json({
            message:"User Not Found"
        })
    }
   
}

