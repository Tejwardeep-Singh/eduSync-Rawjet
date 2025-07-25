const mongoose = require("mongoose");

const classInchargeSchema = mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:Number,
    },
    section:{
        type:String
    }
});
module.exports = mongoose.model("classIncharge",classInchargeSchema);