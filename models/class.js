const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    name:{
        type:String,
    },
    section:{
        type:String,
    },
});
module.exports = mongoose.model("class",classSchema);