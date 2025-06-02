const express = require("express");
const bcrypt = require("bcrypt");
const teacherModel = require('../models/teacherModel');
const studentModel = require('../models/studentModel');
const headModel= require('../models/headModel');
const authenticateJWT = require('../middlewares/authenticate');
const passwordRouter = express.Router();

passwordRouter.post("/teacher", authenticateJWT, async (req, res) => {
  const { oldPass, newPass } = req.body;
  const login_id = req.user.login_id;

  if (!oldPass || !newPass || !login_id) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const teacher = await teacherModel.findOne({ login_id });
    if (!teacher) return res.status(404).send("Teacher not found");
    
    const isMatch = await bcrypt.compare(oldPass, teacher.password);
    if (!isMatch) return res.status(400).send("Incorrect current password");

    const hashedNewPass = await bcrypt.hash(newPass, 10);
    teacher.password = hashedNewPass;
    await teacher.save();

    return res.redirect("/teacher");
  } catch (err) {
    console.error("Error during password change:", err);
    return res.status(500).send("Internal server error");
  }
});
passwordRouter.post("/student", authenticateJWT, async (req, res) => {
  const { oldPass, newPass } = req.body;
  const login_id = req.user.id;
  if (!oldPass || !newPass || !login_id) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const student = await studentModel.findOne({ id:login_id });
    if (!student) return res.status(404).send("student not found");

    const isMatch = await bcrypt.compare(oldPass, student.password);
    if (!isMatch) return res.status(400).send("Incorrect current password");

    const hashedNewPass = await bcrypt.hash(newPass, 10);
    student.password = hashedNewPass;
    await student.save();

    return res.redirect("/student");
  } catch (err) {
    console.error("Error during password change:", err);
    return res.status(500).send("Internal server error");
  }
});
passwordRouter.post("/head", authenticateJWT, async (req, res) => {
  const { oldPass, newPass } = req.body;
  const login_id = req.user.id;

  if (!oldPass || !newPass || !login_id) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const head = await headModel.findOne({ id:login_id });
    if (!head) return res.status(404).send("head not found");

    const isMatch = await bcrypt.compare(oldPass, head.password);
    if (!isMatch) return res.status(400).send("Incorrect current password");

    const hashedNewPass = await bcrypt.hash(newPass, 10);
    head.password = hashedNewPass;
    await head.save();

    return res.redirect("/head");
  } catch (err) {
    console.error("Error during password change:", err);
    return res.status(500).send("Internal server error");
  }
});
module.exports = passwordRouter;
