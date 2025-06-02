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


teacherStudentRouter.get('/', async function(req, res) {
    const { id, message, error } = req.query;

    try {
        const student = id ? await studentDetails.findOne({ id: id }) : null;
        if (student) {
            res.render('studentTeacher', {
                user2:student,     
                user1: {},  
                message: message || null,
                error: null
            });
        } else {
            // student not found — optionally render head page with head info
            res.redirect("/teacher");
        }
    } catch (err) {
        res.status(500).send('Error fetching data: ' + err.message);
    }
});

module.exports = teacherStudentRouter;
