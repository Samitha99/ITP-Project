import express from "express";
import req from "express/lib/request";
import { status } from "express/lib/response";
import Packages from "../models/packages";

const router = express.Router();

//save packages
router.post("/packages/save", (req, res) => {
    let newPackages = new Packages(req.body);
    
  
    newPackages.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Packages Added successfully",
      });
    });
  });
  
 

  //get packages

  router.get('/packages',(req, res) =>{
      Packages.find().exec((err,packages) =>{

        if (err) {
            return res.status(400).json({
              error: err,
            });

        }
        return res.status(200).json({
          success:true,
          currentPackages:packages
        });

    });
  });


  //update Package Details
  router.put('/packages/update/:id',(req,res) => {
    Packages.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err)return res.status(400).json
            ({
                error: err,
              });
              
            return res.status(200).json
            ({
                success:"Booking Package Succesfully Updated"
              });
        }
    

    )
  });
  
  module.exports = router;