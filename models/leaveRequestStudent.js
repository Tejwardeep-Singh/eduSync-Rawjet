const mongoose = require("mongoose");

const leaveRequestStudentSchema = mongoose.Schema({
    id:Number,
    name:{
        type:String,
    },
    class:{
        type:Number,
    },
    section:{
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

const leaveRequestStudent=mongoose.model("leaveRequestStudent",leaveRequestStudentSchema);
module.exports=leaveRequestStudent;