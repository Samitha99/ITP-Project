import mongoose, {Schema} from "mongoose";

 const customerSchema = new Schema({
     name: String,
     telephoneNumber: Number,
     Nic: Number,
     address: String,
 });

module.exports = mongoose.model('Customer', customerSchema);


