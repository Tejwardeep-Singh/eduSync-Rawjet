const express = require("express");
const router = express.Router();
const SubjectClass = require("../models/subjectClass");
const Datesheet = require("../models/datesheet");

// ==============================
// Datesheet Home
// ==============================

router.get("/", (req, res) => {

    res.render("datesheet", {
        subjects: [],
        className: "",
        section: "",
        exam_type: "",
        message: null,
        error: null
    });

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

module.exports = router;