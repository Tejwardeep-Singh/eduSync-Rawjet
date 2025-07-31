const express = require("express");
const sectionRouter = express.Router();
const classSection = require("../models/class");
const teacherDetails = require("../models/classIncharge");
const studentDetails= require("../models/studentModel");

sectionRouter.post("/",function(req,res){
    const {id,name,section}=req.body;
    const sections =  new classSection({id:id,name:name,section:section});
    sections.save();
    res.redirect('/head');
})

sectionRouter.post("/assignTeacher", function(req,res){
    const{t_id,kaksha,section}=req.body;
    const teacher = new teacherDetails({
        id: t_id,
        name:kaksha,
        section:section,
    },{new:True});
    teacher.save();
    res.redirect('/head');
})
sectionRouter.post("/promote",async function(req,res){
    const{kaksha,section}=req.body;
    try{
        const promotedClass =kaksha +1;
        await studentDetails.updateMany(
        { class: kaksha, section: section },
        { $set: { class: promotedClass } }
        );
    }
    catch{
        res.send("error aa gya sir")
    }
    res.redirect("/head")
})

module.exports=sectionRouter;