const express = require("express");
const imagesRouter=express.Router();

imagesRouter.get("/",function(req,res){
    res.render("images");
})
module.exports =imagesRouter;