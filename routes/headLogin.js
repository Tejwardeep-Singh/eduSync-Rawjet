const express = require("express");
const headLoginRouter=express.Router();

headLoginRouter.get("/",function(req,res){
    res.render("headLogin");
})

module.exports =headLoginRouter;