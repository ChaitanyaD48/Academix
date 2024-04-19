const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,

      
    },
    mis: {
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true,
    },
    sem: {
      type: String,
      required: true,
    },
    sec: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", userSchema);
