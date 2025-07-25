require('dotenv').config(); // Load environment variables at the top

const express = require("express");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const leaveRouter = express.Router();
const leaveRequestTeacher= require("../models/leaveRequestTeacher");
const leaveRequestStudent= require("../models/leaveRequestStudent");

leaveRouter.post("/teacher", async function(req, res) {
    const { id, name, from_date, to_date, reason } = req.body;
    const fromFormatted = new Date(from_date).toISOString().split('T')[0];
    const toFormatted= new Date(to_date).toISOString().split('T')[0];
    const request = new leaveRequestTeacher({
        id: id,
        name: name,
        from_date: fromFormatted,
        to_date: toFormatted,
        reason: reason,
        status:"pending",
    });
    request.save();
    res.redirect('/teacher');
});
leaveRouter.post("/student", async function(req, res) {
    const { id, name,kaksha,section, from_date, to_date, reason } = req.body;
    const fromFormatted = new Date(from_date).toISOString().split('T')[0];
    const toFormatted= new Date(to_date).toISOString().split('T')[0];
    const request = new leaveRequestStudent({
        id: id,
        name: name,
        class:kaksha,
        section:section,
        from_date: fromFormatted,
        to_date: toFormatted,
        reason: reason,
        status:"pending",
    });
    request.save();
    res.redirect('/student');
});
module.exports = leaveRouter;

