const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const studentRouter = express.Router();
const studentModel = require("../models/studentModel");
const leaveRequestStudent= require("../models/leaveRequestStudent");
const Marks = require("../models/marks");

const {uploadStudent} = require("../config/cloudinaryupload");

// POST route to update or create student details with cloudinary image upload
studentRouter.post('/editDetails', uploadStudent.single('image'), async function(req, res) {
    const { name, fatherName, motherName, city, state, dob, age, mobile, email, id } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const updatedUser = await studentModel.findOneAndUpdate(
            {id},
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
                image
            },
            { new: true, upsert: true }
        );
        res.redirect('/student');
    } catch (err) {
        console.error("Error updating student:", err);
        res.status(500).send("Error occurred while updating student details.");
    }
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

        const student = await studentModel.findOne({ id: login_id });

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

        res.render("student", {
            user: student,
            user1: {},
            user2: {},
            apply: {},
            studentLeaveDetails,
            dashboard,
            nameValue,
            sectionValue
        });
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return res.redirect("/studentLogin");
    }
});

module.exports = studentRouter;
