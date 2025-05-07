const express = require("express");
const multer = require('multer');
const path = require('path');
const studentRouter = express.Router();
const HeadDetails = require('../models/headDetails');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to store images (make sure the directory exists)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// POST route to update or create head details with image upload
studentRouter.post('/', upload.single('image'), function(req, res) {
    const { name, fatherName, dob, mobile, email } = req.body;
    const image = req.file ? req.file.path : null;  // Image path if uploaded, otherwise null

    studentDetails.findOneAndUpdate(
        { email },  // Find by email
        { name, fatherName, dob, mobile, email, image },
        { new: true, upsert: true }  // upsert will create if not found
    )
    .then(updatedUser => {
        res.render('teacher', {
            user: updatedUser,
            message: 'User updated successfully!',
            error: null,
        });
    })
    .catch(err => {
        res.render('teacher', {
            user: req.body,
            message: null,
            error: 'Error updating user: ' + err.message,
        });
    });
});

// GET route to show form
studentRouter.get('/', function(req, res) {
    HeadDetails.findOne()
        .then(studentDetails => {
            if (!studentDetails) {
                return res.status(404).send('Head Details not found');
            }
            res.render('head', { user: studentDetails, error: null, message: null });
        })
        .catch(err => {
            res.status(500).send('Error fetching headDetails: ' + err.message);
        });
});

module.exports = studentRouter;
