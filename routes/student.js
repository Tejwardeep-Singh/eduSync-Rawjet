const express = require("express");
const studentRouter=express.Router();

studentRouter.get("/",function(req,res){
    res.render("student");
})
module.exports =studentRouter;