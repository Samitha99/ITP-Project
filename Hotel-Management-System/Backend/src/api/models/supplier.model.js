import mongoose, { Schema } from "mongoose";

const supplierSchema = new Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    contactNo:{
        type:Number
    },

    address:{
        type:String
    },

    category:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Suppliers',supplierSchema)