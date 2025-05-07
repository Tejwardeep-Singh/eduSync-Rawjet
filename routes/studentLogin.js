const express = require("express");
const studentLoginRouter=express.Router();

studentLoginRouter.get("/",function(req,res){
    res.render("studentLogin");
})
module.exports =studentLoginRouter;