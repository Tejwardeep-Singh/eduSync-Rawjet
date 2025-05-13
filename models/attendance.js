const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
    id:Number,
    name:{
        type:String,
    },
    total__working_days:Number,
    days_present:Number,
    attendance:Number,
});
studentSchema.pre('attendance_calc', function (next) {
  if (this.total__working_days> 0) {
    this.attendance = (this.days_present / this.total__working_days) * 100;
  } else {
    this.attendance = 0;
  }
  next();
});

const attendanceTeacher=mongoose.model("attendanceTeacher",attendanceSchema);
const attendanceStudent=mongoose.model("attendanceStudent",attendanceSchema);
modeule.exports={attendanceTeacher,attendanceStudent};