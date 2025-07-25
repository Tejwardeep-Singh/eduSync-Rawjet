const mongoose = require("mongoose");

const leaveRequestTeacherSchema = mongoose.Schema({
    id:Number,
    name:{
        type:String,
    },
    from_date:{
        type:Date,
    },
    to_date:{
        type:Date,
    },
    reason:{
        type:String,
        default:"pending",
    },
    status:{
        type:String,
    }
});

const leaveRequestTeacher=mongoose.model("leaveRequestTeacher",leaveRequestTeacherSchema);
module.exports=leaveRequestTeacher;