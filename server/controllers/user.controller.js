const User=require("../models/user.model");
const generateToken = require("../utils/generateToken");
bcrypt=require("bcrypt");
const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({success:false,message:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({success:false,message:"User already exists"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
       await User.create({name,email,password:hashedPassword})
       //201-created
       return res.status(201).json({success:true,message:"User registered successfully"});
    }catch(err){
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({success:false,message:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid credentials"});
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({success:false,message:"Invalid credentials"});
        }
        // Generate JWT token here and send in response
        generateToken(res,user,`Welcome back ${user.name}`);
       return res.status(200).json({success:true,message:"Login successful"});
    }catch(err){
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}
module.exports={register,login}