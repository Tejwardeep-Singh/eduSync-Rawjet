const mongoose = require("mongoose");

const studentDetailsSchema = mongoose.Schema({
    name:{
        type:String,
    },
    fatherName:{
        type:String,
    },
    dob:{
        type:Date,
    },
    mobile:Number,
    email:{
        type:String,
    },
    image: { 
        type: String }
});

module.exports = mongoose.model("studentDetails",studentDetailsSchema);