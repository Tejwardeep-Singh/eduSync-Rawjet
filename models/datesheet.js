const mongoose = require("mongoose");

const datesheetSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model("datesheet", datesheetSchema);
