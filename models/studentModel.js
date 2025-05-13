const mongoose = require("mongoose");

const studentDetailsSchema = mongoose.Schema({
    id:Number,
    name:{
        type:String,
    },
    fatherName:{
        type:String,
    },
    motherName:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    dob:{
        type:Date,
    },
    age:Number,
    mobile:Number,
    email:{
        type:String,
    },
    image: { 
        type: String }
});

module.exports = mongoose.model("studentDetails",studentDetailsSchema);