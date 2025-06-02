const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
    },
});
module.exports=mongoose.model("subject",subjectSchema);