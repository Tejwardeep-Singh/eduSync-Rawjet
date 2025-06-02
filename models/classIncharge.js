const mongoose = require("mongoose");

const classInchargeSchema = mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:Number,
    },
});
module.exports = mongoose.model("classIncharge",classInchargeSchema);