import mongoose from "mongoose";

const packagesSchema = new mongoose.Schema({
    packageName: {
        type: "string",
        required: true,
      },

      description: {
        type: "string",
        required: true,
      },

      price: {
        type: "number",
        required: true,
      },
});

    module.exports = mongoose.model("Packages", packagesSchema);




