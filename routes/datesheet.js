const express = require('express');
const multer = require('multer');
const XLSX= require('xlsx');
const path = require('path');
const fs = require('fs');
const Datesheet = require('../models/datesheet');
const datesheetRouter = express.Router();
const axios = require("axios");


const {uploadFile} = require("../config/cloudinaryupload");
const datesheet = require('../models/datesheet');


// Route
datesheetRouter.post('/upload', uploadFile.single('excel'), async (req, res) => {
    try {
        const { kaksha, section,examType,month } = req.body;
        const excel = req.file.path;
        // Save to MongoDB
        const newDatesheet = new Datesheet({
            id: kaksha,
            section,
            month,
            examType,
            image: excel
        });

        await newDatesheet.save();
        res.redirect("/teacher");
    } catch (err) {
        console.error("Upload failed:", err);
        console.error("Error in /datesheet route:", err);  // Shows exact issue in console
        res.status(500).send("Server Error: " + err.message); 
    }
});
datesheetRouter.get("/show", async (req, res) => {
    const { kaksha,examType,section,month } = req.query;
  
    try {
      const sheet = await Datesheet.findOne({ id: kaksha, section,month,examType });
  
      if (!sheet) {
        return res.send("No datesheet found for given class and section.");
      }
      function excelDateToJSDate(serial) {
        const utc_days = Math.floor(serial - 25569);
        const utc_value = utc_days * 86400; // seconds
        const date_info = new Date(utc_value * 1000); // milliseconds
        return date_info.toISOString().split('T')[0]; // "YYYY-MM-DD"
    }
    
  
      // Download the .xlsx file from Cloudinary
      const response = await axios.get(sheet.image, { responseType: "arraybuffer" });
  
      // Read workbook from buffer
      const workbook = XLSX.read(response.data, { type: "buffer" });
  
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
      const processedRows = sheetData.map(row => {
        if (typeof row[3] === 'number') {
            row[3] = excelDateToJSDate(row[3]);
        }
        return row;
    });
    
  
      res.render("showDatesheet", {
        examType: sheet.examType,
        tableData: processedRows,
        month,
        kaksha,
        section
      });
  
    } catch (err) {
      console.error("🔥 Full Error:", err);
      res.status(500).send("Error displaying datesheet.");
    }
  });
datesheetRouter.get("/showStudent", async (req, res) => {
    const { nameValue,examType,sectionValue,month } = req.query;
  
    try {
      const sheet = await Datesheet.findOne({ id: nameValue, section:sectionValue,month,examType });
  
      if (!sheet) {
        return res.send("No datesheet found for given class and sectionValue.");
      }
      function excelDateToJSDate(serial) {
        const utc_days = Math.floor(serial - 25569);
        const utc_value = utc_days * 86400; // seconds
        const date_info = new Date(utc_value * 1000); // milliseconds
        return date_info.toISOString().split('T')[0]; // "YYYY-MM-DD"
    }
    
  
      // Download the .xlsx file from Cloudinary
      const response = await axios.get(sheet.image, { responseType: "arraybuffer" });
  
      // Read workbook from buffer
      const workbook = XLSX.read(response.data, { type: "buffer" });
  
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
      const processedRows = sheetData.map(row => {
        if (typeof row[3] === 'number') {
            row[3] = excelDateToJSDate(row[3]);
        }
        return row;
    });
    
  
      res.render("showDatesheet", {
        examType: sheet.examType,
        tableData: processedRows,
        month,
        kaksha:nameValue,
        section:sectionValue
      });
  
    } catch (err) {
      console.error("🔥 Full Error:", err);
      res.status(500).send("Error displaying datesheet.");
    }
  });
  

module.exports=datesheetRouter;