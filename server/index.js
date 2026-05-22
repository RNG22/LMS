// import express from "express";
const express = require('express');
const dotenv=require('dotenv')
const connectDB=require('./database/dbConnect');
const userRoute=require('./routes/user.route');
const cookieParser = require('cookie-parser');
const cors=require('cors')

dotenv.config();
//call database connection
connectDB();

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/v1/user",userRoute)

app.get("/home",(_,res)=>{
    res.status(200).json({
        success:true,
        message:"welcome to home page"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})
