import express from "express";
import req from "express/lib/request";
import { status } from "express/lib/response";
import Bookings from "../models/bookings";

const router = express.Router();

//Create Booking
router.post("/bookings/save", (req, res) => {
    let newBookings = new Bookings(req.body);
    
  
    newBookings.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Create Booking  successfully",
      });
    });
  });
  
 

  //get Bookings

  router.get('/bookings',(req, res) =>{
    Bookings.find().exec((err,bookings) =>{

        if (err) {
            return res.status(400).json({
              error: err,
            });

        }
        return res.status(200).json({
          success:true,
          currentBookings:bookings
        });

    });
  });


  //update Bookings Details
  router.put('/bookings/update/:id',(req,res) => {
    Bookings.findByIdAndUpdate(
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
                success:"Booking  Succesfully Updated"
              });
        }
    

    )
  });
  
  module.exports = router;