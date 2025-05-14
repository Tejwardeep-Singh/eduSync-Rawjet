const mongoose = require("mongoose");

const leaveRequestSchema = mongoose.Schema({
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

const leaveRequestTeacher=mongoose.model("leaveRequestTeacher",leaveRequestSchema);
const leaveRequestStudent=mongoose.model("leaveRequestStudent",leaveRequestSchema);
module.exports={leaveRequestTeacher,leaveRequestStudent};