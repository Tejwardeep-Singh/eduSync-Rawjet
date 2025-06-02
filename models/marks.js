const mongoose = require("mongoose");

const marksSchema = mongoose.Schema({
    name:{
        type:String,
    },
    exam:{
        type:String,
    },
    year:{
        type:Number,
    },
    marks:Number,
});
module.exports=mongoose.model("marks",marksSchema);