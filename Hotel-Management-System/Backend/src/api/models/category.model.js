import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    categoryName: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
