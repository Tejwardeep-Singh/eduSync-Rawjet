const express = require("express");
const subjectRouter = express.Router();
const subject = require("../models/subject");
const subjectClass = require("../models/subjectClass");

subjectRouter.post("/",function(req,res){
    const {id,name}=req.body;
    const subjects =  new subject({id:id,name:name});
    subjects.save();
    res.redirect('/head');
})
subjectRouter.post("/addSubject",function(req,res){
    const{kaksha,id,name,section}=req.body;
    const add = new subjectClass({id:id,name:name,class:kaksha,section:section});
        add.save();
        res.redirect("/head");
})
module.exports= subjectRouter;