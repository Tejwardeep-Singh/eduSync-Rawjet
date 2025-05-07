const express = require("express");
const teacherRouter = express.Router();

teacherRouter.get("/",function(req,res){
    res.render("teacher");
})

module.exports= teacherRouter;