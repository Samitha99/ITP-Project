const mongoose = require('mongoose');

const employeeattendanceSchema = new mongoose.Schema({

  username:{
       
    type:String,
    required:true
},



 date:{

   type:String,
   required:true



},

 entertime:{

  type:Number,
  required:false

},


 leavetime:{
  
   type:String,
   required:true
}





});

module.exports = mongoose.model('EmployeeAttendance',employeeattendanceSchema)