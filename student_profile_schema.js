// /backend/data.js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Dhruv:Dhruv@cluster0-j4wz3.mongodb.net/test?retryWrites=true"
);
const Schema = mongoose.Schema;

// this will be our data base's data structure
const StudentProfileSchema = new Schema(
  {
    id: { type: String, unique: true, required: true },
    message: String,
    name: String,
    age: Number,
    contact: Number,
    emailId: String,
    password: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("StudentProfile", StudentProfileSchema);
