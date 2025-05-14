require('dotenv').config(); // Load environment variables at the top

const express = require("express");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const leaveRouter = express.Router();
const { leaveRequestTeacher } = require("../models/leaveRequest");

leaveRouter.post("/", async function(req, res) {
    const { id, name, from_date, to_date, reason } = req.body;
    const request = new leaveRequestTeacher({
        id: id,
        name: name,
        from_date: from_date,
        to_date: to_date,
        reason: reason,
        status:"pending",
    });
    request.save();
    res.redirect('/teacher');
});


module.exports = leaveRouter;

