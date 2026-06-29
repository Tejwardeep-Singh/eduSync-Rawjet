const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

    student_id:{
        type:Number,
        required:true
    },

    class:{
        type:String,
        required:true
    },

    section:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["Present","Absent"],
        required:true
    }

});

module.exports = mongoose.model("attendance", attendanceSchema);