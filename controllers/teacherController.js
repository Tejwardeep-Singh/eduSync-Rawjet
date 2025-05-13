const jwt = require('jsonwebtoken');
const express = require('express');
const teacherRouter = express.Router();
const teacherModel = require('../models/teacherModel');
const bcrypt = require('bcrypt');
const generateTeacherToken = require('../utils/generateTeacherTokens');


teacherRouter.post('/teacherLogin', async (req, res) => {
    const { id, password } = req.body;

    try {
        let teacher = await teacherModel.findOne({ login_id: id });

        if (!teacher) {
            return res.status(400).send("Teacher not found");
        }

        const isPasswordValid = await bcrypt.compare(password, teacher.password);

        if (isPasswordValid) {
            // Generate token and send it as a cookie or response
            const token = generateTeacherToken(teacher);
            res.cookie('token', token, { httpOnly: true });

            // Redirect to the teacher page
            return res.redirect('/teacher');
        } else {
            return res.status(400).send("Password incorrect");
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
    }
});

module.exports = teacherRouter;
