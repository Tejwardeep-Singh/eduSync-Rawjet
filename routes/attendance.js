const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Student = require("../models/studentModel");
const ClassIncharge = require("../models/classIncharge");
const Teacher = require("../models/teacherModel");
const Attendance = require("../models/attendance");

router.post("/teacher", async (req, res) => {

    const token = req.cookies.token;

    if (!token)
        return res.redirect("/teacherLogin");

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_KEY
        );

        const login_id = decoded.login_id;

        const incharge = await ClassIncharge.findOne({
            id: login_id
        });

        if (!incharge)
            return res.send("Class not assigned.");

        const {

            className,

            section,

            date

        } = req.body;

        let presentStudents =
            req.body.presentStudents || [];

        if (!Array.isArray(presentStudents))
            presentStudents = [presentStudents];

        const students = await Student.find({

            class: className,

            section: section

        });

        // Remove old attendance for that day
        await Attendance.deleteMany({

            class: className,

            section,

            date

        });

        const attendance = students.map(student => ({

            student_id: student.id,

            class: className,

            section,

            date,

            status: presentStudents.includes(
                student.id.toString()
            )
                ? "Present"
                : "Absent"

        }));

        await Attendance.insertMany(attendance);
        res.redirect("/attendance/teacher?success=Attendance saved successfully.");

    }

    catch (err) {

        console.log(err);

        res.send(err.message);

    }

});

router.get("/teacher", async (req,res)=>{

    const token = req.cookies.token;

    if(!token)
        return res.redirect("/teacherLogin");

    try{

        const decoded = jwt.verify(
            token,
            process.env.JWT_KEY
        );

        const login_id = decoded.login_id;

        const teacher =
            await Teacher.findOne({
                login_id
            });

        const incharge =
            await ClassIncharge.findOne({
                id:login_id
            });

        if(!incharge)
            return res.send("Class not assigned.");

        const students =
            await Student.find({

                class:incharge.name,
                section:incharge.section

            }).sort({id:1});

        res.render("attendanceTeacher",{

            teacher,

            students,

            className:incharge.name,

            section:incharge.section,

            today:new Date()
                .toISOString()
                .split("T")[0]

        });

    }

    catch(err){

        console.log(err);

        res.send(err.message);

    }

});

module.exports = router;