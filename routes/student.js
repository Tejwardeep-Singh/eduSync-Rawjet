const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const studentRouter = express.Router();
const studentModel = require("../models/studentModel");
const leaveRequestStudent= require("../models/leaveRequestStudent");
const Marks = require("../models/marks");
const Attendance = require("../models/attendance");

const {uploadStudent} = require("../config/cloudinaryupload");

// POST route to update or create student details with cloudinary image upload
studentRouter.post('/editDetails', uploadStudent.single('image'), async (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/studentLogin");
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const login_id = decoded.id;

    const {
        name,
        fatherName,
        motherName,
        city,
        state,
        dob,
        age,
        mobile,
        email
    } = req.body;

    const image = req.file ? req.file.path : null;

    await studentModel.findOneAndUpdate(
        { id: login_id },
        {
            name,
            fatherName,
            motherName,
            city,
            state,
            dob,
            age,
            mobile,
            email,
            ...(image && { image })
        },
        {
            new: true
        }
    );

    res.redirect("/student");

});
studentRouter.get('/logout', (req, res) => {
  res.clearCookie('token'); // This removes the JWT cookie
  res.redirect('/studentLogin');   // Redirect to login or homepage
});
// GET student dashboard
studentRouter.get("/", async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        console.log("No token found in cookies");
        return res.redirect("/studentLogin");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const login_id = decoded.id;
        const totalWorkingDays = await Attendance.countDocuments({student_id: login_id});
        const presentDays = await Attendance.countDocuments({student_id: login_id,status: "Present"});
        const attendancePercentage = totalWorkingDays > 0 ? ((presentDays / totalWorkingDays) * 100).toFixed(1) : 0;
        const marksDocs = await Marks.find({ student_id: login_id });
        let overallPercentage = "--";

        if (marksDocs.length > 0) {

            let totalObtained = 0;
            let totalMaximum = 0;

            marksDocs.forEach(doc => {

                const obtained = [...doc.marks.values()].reduce((a, b) => a + b, 0);

                totalObtained += obtained;

                const subjectCount = doc.marks.size;
                totalMaximum += subjectCount * 100;

            });

            overallPercentage =
                ((totalObtained / totalMaximum) * 100).toFixed(1);

        }
        const student = await studentModel.findOne({ id: login_id });
        const exams = await Marks.aggregate([
            {
                $match: {
                    student_id: login_id
                }
            },
            {
                $group: {
                    _id: {
                        exam_type: "$exam_type",
                        date: "$date"
                    }
                }
            },
            {
                $sort: {
                    "_id.date": -1
                }
            }
        ]);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        const studentLeaveDetails = await leaveRequestStudent.find({ id: login_id });
        const nameValue= student.class;
        const sectionValue=student.section
        const approvedLeaves = studentLeaveDetails.filter(
            leave => leave.status === "approved"
        ).length;

        const totalSubjects = student.subjects ? student.subjects.length : 0;

        const dashboard = {
            classAssigned: nameValue,
            sectionAssigned: sectionValue,
            totalSubjects,
            totalLeaves: studentLeaveDetails.length,
            approvedLeaves,
            pendingLeaves: studentLeaveDetails.filter(
                leave => leave.status === "pending"
            ).length
        };
        const absentDays = totalWorkingDays - presentDays;
        res.render("student", {
            user: student,
            user1: {},
            user2: {},
            apply: {},
            studentLeaveDetails,
            dashboard,
            nameValue,
            exams,
            overallPercentage,
            attendance: {
                percentage: attendancePercentage,
                present: presentDays,
                working: totalWorkingDays,
                absent: absentDays
            },
            sectionValue
        });
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return res.redirect("/studentLogin");
    }
});

module.exports = studentRouter;
