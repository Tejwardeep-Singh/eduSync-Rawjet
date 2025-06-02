const mongoose = require("mongoose");

const subjectClassSchema = mongoose.Schema({
    id:Number,
    name:{
        type:String,
    }
});

const class1 = mongoose.model("class1",subjectClassSchema);
const class2 = mongoose.model("class2",subjectClassSchema);
const class3 = mongoose.model("class3",subjectClassSchema);
const class4 = mongoose.model("class4",subjectClassSchema);
const class5 = mongoose.model("class5",subjectClassSchema);
module.exports= {class1,class2,class3,class4,class5};