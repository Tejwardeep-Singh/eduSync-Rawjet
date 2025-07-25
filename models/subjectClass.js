const mongoose = require("mongoose");

const subjectClassSchema = mongoose.Schema({
    class:{
        type:Number
    },
    section:{
        type:String
    },
    id:{
        type:String
    },
    name:{
        type:String,
    }
});

const subjectClass = mongoose.model("subjectClass",subjectClassSchema);
module.exports=subjectClass;