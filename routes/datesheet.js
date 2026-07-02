const express = require("express");
const router = express.Router();
const SubjectClass = require("../models/subjectClass");
const Datesheet = require("../models/datesheet");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/teacherModel");
const ClassIncharge = require("../models/classIncharge");


// ==============================
// Datesheet Home
// ==============================

router.get("/", async (req, res) => {
    const datesheets = await Datesheet.find();

    res.render("datesheet", {
        subjects: [],
        className: "",
        section: "",
        exam_type: "",
        message: null,
        datesheets,
        error: null
    });

});



router.get("/teacher", async (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/teacherLogin");
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_KEY
        );

        const login_id = decoded.login_id;

        const teacher = await Teacher.findOne({
            login_id
        });

        const incharge = await ClassIncharge.findOne({
            id: login_id
        });

        if (!incharge) {
            return res.send("No class assigned.");
        }

        const datesheets = await Datesheet.find({

            class: String(incharge.name),
            section: incharge.section

        }).sort({ createdAt: -1 });

        res.render("teacherDatesheets", {

            teacher,
            className: incharge.name,
            section: incharge.section,
            datesheets

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).send(err.message);

    }

});
router.post("/generate", async (req, res) => {

    try {

        const {
            class: className,
            section,
            exam_type,
            subject,
            exam_date,
            start_time,
            end_time
        } = req.body;

        const subjects = Array.isArray(subject) ? subject : [subject];
        const examDates = Array.isArray(exam_date) ? exam_date : [exam_date];
        const startTimes = Array.isArray(start_time) ? start_time : [start_time];
        const endTimes = Array.isArray(end_time) ? end_time : [end_time];
        const datesheets = await Datesheet.find();

        // Check if datesheet already exists
        const existing = await Datesheet.findOne({
            class: className,
            section,
            exam_type
        });

        if (existing) {

            return res.render("datesheet", {

                subjects: [],
                className: "",
                section: "",
                exam_type: "",
                datesheets,
                message: null,
                error: "Datesheet already exists."

            });

        }

        const uniqueDates = new Set();

        const exams = [];

        for (let i = 0; i < subjects.length; i++) {

            if (
                !examDates[i] ||
                !startTimes[i] ||
                !endTimes[i]
            ) {

                return res.send("Please fill all fields.");

            }

            if (startTimes[i] >= endTimes[i]) {

                return res.send(
                    `End Time must be greater than Start Time for ${subjects[i]}.`
                );

            }

            if (uniqueDates.has(examDates[i])) {

                return res.send(
                    `Two exams cannot be on ${examDates[i]}.`
                );

            }

            uniqueDates.add(examDates[i]);

            exams.push({

                subject: subjects[i],

                exam_date: examDates[i],

                start_time: startTimes[i],

                end_time: endTimes[i]

            });

        }

        await Datesheet.create({

            class: className,

            section,

            exam_type,

            exams

        });

        res.redirect("/datesheet");

    }

    catch (err) {

        console.log(err);

        res.status(500).send(err.message);

    }

});
// ==============================
// Load Subjects
// ==============================

router.get("/loadSubjects", async (req, res) => {
    try {

        const {
            class: className,
            section,
            exam_type
        } = req.query;

        const subjects = await SubjectClass.find({
            class: Number(className),
            section: section
        });
                if (subjects.length === 0) {

            return res.render("datesheet", {

                subjects: [],
                className,
                section,
                exam_type,
                message: null,
                error: "No subjects found for this class."

            });

        }

        res.render("datesheet", {

            subjects,
            className,
            section,
            exam_type,
            message: null,
            error: null

        });

    }

    catch (err) {

        console.log(err);

        res.render("datesheet", {

            subjects: [],
            className: "",
            section: "",
            exam_type: "",
            message: null,
            error: "Something went wrong."

        });

    }

});
router.get("/view", async (req, res) => {

    try {

        const {
            class: className,
            section,
            exam_type
        } = req.query;

        const datesheet = await Datesheet.findOne({

            class: className,
            section,
            exam_type

        });

        if (!datesheet) {

            return res.send("Datesheet not found.");

        }

        res.render("showDatesheet", {

            datesheet

        });

    }

    catch (err) {

        console.log(err);

        res.send(err.message);

    }

});
router.get("/view/:id", async (req, res) => {

    try {

        const datesheet = await Datesheet.findById(
            req.params.id
        );

        if (!datesheet) {

            return res.send("Datesheet not found.");

        }

        res.render("viewDatesheet", {

            datesheet

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).send(err.message);

    }

});
router.get("/edit/:id", async(req,res)=>{

    const datesheet = await Datesheet.findById(req.params.id);

    if(!datesheet){

        return res.send("Datesheet not found");

    }

    res.render("editDatesheet",{

        datesheet

    });

});
router.post("/update/:id",async(req,res)=>{

const{

subject,

exam_date,

start_time,

end_time

}=req.body;

const exams=[];

for(let i=0;i<subject.length;i++){

exams.push({

subject:subject[i],

exam_date:exam_date[i],

start_time:start_time[i],

end_time:end_time[i]

});

}

await Datesheet.findByIdAndUpdate(

req.params.id,

{

$set:{

exams

}

}

);

res.redirect("/datesheet");

});
module.exports = router;