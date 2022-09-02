const express = require('express');
const asyncHandler = require("express-async-handler");
const employee = require('../models/employee');

const router = express.Router();

//Create an Employee 

router.post('/add', asyncHandler( async (req,res) => {

    
   
   const {username,email,mobilenumber,gender,landline,designation,department,bankaccount} = req.body ;
    if(!username|| !email|| !mobilenumber|| !gender|| !landline|| !designation|| !department|| !bankaccount){
        res.status(400).json({messege:"Please fill all the fields!"})
        
    }
     const emailExist = await employee.findOne({email})
    if(emailExist){res.status(400).json({message:"Email Already Exist "})}

    const userExist = await employee.findOne({username})
    if(userExist){res.status(400).json({message:"User Already Exist "})}


   const data = await employee.create({username,email,mobilenumber,gender,landline,designation,department,bankaccount});
   if( data ) {
       res.status(201).json({message:"Employee Added Successfully!"})
   }
       else{res.status(400).json({message:"Error Occured "})}
}))


//Getting All Employees

router.get('/all',(req,res)=>{
    employee.find().exec((err,employee)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            data:employee
        });
    });
});

//get a relavant Employee

router.get('/emp/:id',(req,res)=>{
    let postId = req.params.id;

    employee.findById(postId,(err,data) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            data 
        });

    });
});

//update an Employee

router.put('/update/:id',(req,res)=>{
    employee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updated successfully"
            });
        }
    );
});

// Delete an Employee

router.delete('/delete/:id',(req,res)=>{
    employee.findByIdAndDelete(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});



module.exports = router;
