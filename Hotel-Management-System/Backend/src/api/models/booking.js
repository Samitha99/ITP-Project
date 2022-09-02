import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    Name: {
        type: "string",
        required: true,
      },
      IdNumber: {
        type: "number",
        required: true,
      },
      PhoneNumber: {
        type: "number",
        required: true,
      },

      Email: {
        type: "string",
        required: true,
      },

      ArrivalDate: {
        type: "string",
        required: true,
      },

      DepatureDate: {
        type: "string",
        required: true,
      },

      NumberOfGuests: {
        type: "number",
        required: true,
      },

      SpecialNotes: {
        type: "string",
        required: true,
      },
});

    module.exports = mongoose.model("Bookings", bookingSchema);


