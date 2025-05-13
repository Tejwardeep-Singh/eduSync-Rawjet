const express = require("express");
const multer = require('multer');
const path = require('path');
const teacherStudentRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const studentDetails = require('../models/studentModel');
const teacherDetails = require('../models/teacherModel');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Make sure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// ✅ POST route: Create/update teacher, then redirect to /head with teacher ID
teacherStudentRouter.post('/', upload.single('image'), async function(req, res) {
    const { login_id, name, fatherName, dob, dateOfJoining, mobile, email } = req.body;
    const image = req.file ? req.file.path : null;
    const dobFormatted = new Date(dob).toISOString().split('T')[0];
    const dojFormatted = new Date(dateOfJoining).toISOString().split('T')[0];

    try {
        const hashedPassword = await bcrypt.hash(login_id, saltRounds);
        await studentDetails.findOneAndUpdate(
            { login_id },
            {
                login_id,
                name,
                fatherName,
                dob: dobFormatted,
                dateOfJoining: dojFormatted,
                mobile,
                email,
                image,
                password:hashedPassword,
            },
            { new: true, upsert: true }
        );

        // Redirect to /head with login_id as query param
        res.redirect(`/head?id=${login_id}&message=Teacher%20updated%20successfully`);
    } catch (err) {
        console.error("Error updating teacher:", err.message);
        // Redirect with error message (optional)
        res.redirect(`/head?error=${encodeURIComponent(err.message)}`);
    }
});

teacherStudentRouter.get('/', async function(req, res) {
    const { id, message, error } = req.query;

    try {
        const student = id ? await studentDetails.findOne({ login_id: id }) : null;
        const teacher = await teacherDetails.findOne();

        if (teacher) {
            res.render('studentTeacher', {
                user2:student,     
                user1: {},          // Optional
                user: teacher|| {},   // Head details
                message: message || null,
                error: null
            });
        } else {
            // student not found — optionally render head page with head info
            res.render('teacher', {
                user1: {}, 
                user2: {}, 
                user: teacher || {},
                message: null,
                error: "student not found."
            }); 
        }
    } catch (err) {
        res.status(500).send('Error fetching data: ' + err.message);
    }
});

module.exports = teacherStudentRouter;
