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

        // Convert to arrays if only one subject exists
        const subjects = Array.isArray(subject) ? subject : [subject];
        const examDates = Array.isArray(exam_date) ? exam_date : [exam_date];
        const startTimes = Array.isArray(start_time) ? start_time : [start_time];
        const endTimes = Array.isArray(end_time) ? end_time : [end_time];

        // Check if this datesheet already exists
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
                error: "Datesheet already exists for this examination."
            });

        }

        const docs = [];

        for (let i = 0; i < subjects.length; i++) {

            // Validate empty fields
            if (
                !examDates[i] ||
                !startTimes[i] ||
                !endTimes[i]
            ) {

                return res.send("Please fill all dates and timings.");

            }

            // End time must be after start time
            if (startTimes[i] >= endTimes[i]) {

                return res.send(
                    `End time must be greater than start time for ${subjects[i]}.`
                );

            }

            // Same day cannot have two exams
            const sameDay = await Datesheet.findOne({

                class: className,
                section,
                exam_type,
                exam_date: examDates[i]

            });

            if (sameDay) {

                return res.send(
                    `${examDates[i]} already has an exam scheduled.`
                );

            }

            docs.push({

                class: className,
                section,
                exam_type,
                subject: subjects[i],
                exam_date: examDates[i],
                start_time: startTimes[i],
                end_time: endTimes[i]

            });

        }

        await Datesheet.insertMany(docs);

        res.redirect("/datesheet?message=Datesheet generated successfully");

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