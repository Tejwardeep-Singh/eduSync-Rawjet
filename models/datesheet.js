const mongoose = require("mongoose");

const datesheetSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    section:{
        type:String,
    },
    month:{
        type:String,
    },
    examType:{
        type:String,
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model("datesheet", datesheetSchema);
