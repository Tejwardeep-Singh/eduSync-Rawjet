const mongoose = require("mongoose");

const datesheetSchema = new mongoose.Schema({

    class: {
        type: String,
        required: true
    },

    section: {
        type: String,
        required: true
    },

    exam_type: {
        type: String,
        required: true
    },

    exams: [

        {

            subject: {
                type: String,
                required: true
            },

            exam_date: {
                type: String,
                required: true
            },

            start_time: {
                type: String,
                required: true
            },

            end_time: {
                type: String,
                required: true
            }

        }

    ]

});

module.exports = mongoose.model("Datesheet", datesheetSchema);