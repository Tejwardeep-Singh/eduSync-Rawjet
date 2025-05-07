const express = require("express");
const teacherLoginRouter=express.Router();

teacherLoginRouter.get("/",function(req,res){
    res.render("teacherLogin");
})
module.exports =teacherLoginRouter;