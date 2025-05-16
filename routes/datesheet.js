require('dotenv').config(); // Load environment variables

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const datesheetRouter = express.Router();
const datesheet = require("../models/datesheet"); // Capitalized to match Mongoose convention

const upload = multer({ dest: "uploads/" });

// POST: Upload Datesheet
datesheetRouter.post("/", upload.single("image"), async (req, res) => {
    const {id}=req.body;
    const image = req.file ? req.file.path : null; 
    const dates = new datesheet({
        id:id,
        image:image
    })
    dates.save();
    res.redirect("/teacher");

});

// GET: Fetch Datesheets by class using query param
// Example: /datesheet?id=10
datesheetRouter.get("/", async function (req, res) {
    const { id } = req.query;  // <-- use req.query instead of req.body
    try {
        const datesheets= await datesheet.find({ id: id });
        res.render("datesheetViewHead",{datesheets});
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to fetch datesheets" });
    }
});


module.exports = datesheetRouter;
