const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

  username:{
       
    type:String,
    required:true
},



email:{

   type:String,
   required:true



},

mobilenumber:{

  type:Number,
  required:false

},


gender:{
  
   type:String,
   required:true
},


landline:{

  type:Number,
  required:true

},

designation:{
  
  type:String,
  required:true
},

department:{
  
  type:String,
  required:true
},

bankaccount:{
  
  type:String,
  required:true
},





});

module.exports = mongoose.model('Employee',employeeSchema)