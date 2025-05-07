const mongoose = require("mongoose");

const teacherDetailsSchema = mongoose.Schema({
    login_id:Number,
    name:{
        type:String,
    },
    fatherName:{
        type:String,
    },
    dob:{
        type:String,
    },
    dateOfJoining:{
        type:String,
    },
    mobile:Number,
    email:{
        type:String,
    },
    image: { 
        type: String }
});

module.exports = mongoose.model("teacherDetails",teacherDetailsSchema);