const express = require("express");
const teacherStudentRouter = express.Router();
const studentDetails = require('../models/studentModel');


teacherStudentRouter.post('/remove', async function(req, res) {
    const { id } = req.body;
    try {
        const student = id ? await studentDetails.findOne({ id: id }) : null;
        if (student) {
            await student.deleteOne(); 
            res.redirect("/teacher");
        } else {
            res.status(404).send("Student not found");
        }

    } catch (err) {
        res.status(500).send('Error fetching data: ' + err.message);
    }
});
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
