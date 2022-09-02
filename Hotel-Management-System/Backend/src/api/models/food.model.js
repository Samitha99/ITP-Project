import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
  {
    foodName: {
      type: "string",
      required: true,
    },
    foodType: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    quantity: {
      type: "number",
      required: true,
    },
    quantity: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
