const express = require("express");
const subjectRouter = express.Router();
const subject = require("../models/subject");
const {class1,class2,class3,class4,class5} = require("../models/subjectClass");

subjectRouter.post("/",function(req,res){
    const {id,name}=req.body;
    const subjects =  new subject({id:id,name:name});
    subjects.save();
    res.redirect('/head');
})
subjectRouter.post("/addSubject",function(req,res){
    console.log("Received req.body:", req.body);
    const{kaksha,id,name}=req.body;
    if(kaksha==1){
        const add = new class1({id:id,name:name});
        add.save();
        res.redirect("/head");
    }
    if(kaksha==2){
        const add = new class2({id:id,name:name});
        add.save();
        res.redirect("/head");
    }
    if(kaksha==3){
        const add = new class3({id:id,name:name});
        add.save();
        res.redirect("/head");
    }
    if(kaksha==4){
        const add = new class4({id:id,name:name});
        add.save();
        res.redirect("/head");
    }
    if(kaksha==5){
        const add = new class5({id:id,name:name});
        add.save();
        res.redirect("/head");
    }
})
module.exports= subjectRouter;