const express = require("express");
const studentRouter=express.Router();
const jwt = require("jsonwebtoken");
const studentModel= require("../models/studentModel");
const {leaveRequestStudent} = require("../models/leaveRequest")

studentRouter.get("/", async (req, res) => {
    const token = req.cookies.token;
    console.log("Cookie token:", token);

    if (!token) {
        console.log("No token found in cookies");
        return res.redirect("/studentLogin");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log("Decoded token:", decoded);

        const login_id = decoded.id; // or decoded.login_id if that’s your final structure
        const student = await studentModel.findOne({ id: login_id });

        if (!student) {
            console.log("Student not found in DB");
            return res.status(404).send("student not found");
        }

        const studentLeaveDetails = await leaveRequestStudent.find({ id: login_id });

        return res.render("student", {
            user: student,
            user1: {},
            user2: {},
            apply: {},
            studentLeaveDetails,
        });
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return res.redirect("/studentLogin");
    }
});

module.exports = studentRouter;