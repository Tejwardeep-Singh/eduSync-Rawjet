const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  student_id: {
    type: Number,
    required: true,
    ref: 'studentDetails'
  },
  class: String,
  section: String,
  exam_type: String,
  marks: {
    type: Map,
    of: Number
  },
  total: Number,
  date:{
    type:String,
  }
});

module.exports=mongoose.model("marks",marksSchema);