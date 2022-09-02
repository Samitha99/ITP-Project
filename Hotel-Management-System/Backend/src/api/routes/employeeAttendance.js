const express = require('express');
const employeeAttendance = require('../models/employeeAttendance');

const router = express.Router();

// Add an Attendance 

router.post('/attendanceadd',(req,res) => {

    let newEmployee = new employeeAttendance(req.body);

    newEmployee.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Attendance saved successfully !!! "
        });
    });
});

//Get All Attendance

router.get('/attendanceall',(req,res)=>{
    employeeAttendance.find().exec((err,employeeAttendance)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            data:employeeAttendance
        });
    });
});



//Update an Attendance

router.put('/attendanceupdate/:id',(req,res)=>{
    employeeAttendance.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updated Attendance successfully"
            });
        }
    );
});

// Delete an Attendance

router.delete('/attendancedelete/:id',(req,res)=>{
    employeeAttendance.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});


module.exports = router;
