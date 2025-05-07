const express = require("express");
const app =express();
const path=require("path");
const expressSession = require("express-session");
const flash = require("flash");
const cookieParser=require("cookie-parser");
const mongoose = require("mongoose");
const connection=require("./config/mongooseConnection")


require("dotenv").config();
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
}));    
app.use(flash());


//routes
const homeRouter=require("./routes/home")
const studentLoginRouter=require("./routes/studentLogin")
const teacherLoginRouter=require("./routes/teacherLogin")
const headLoginRouter=require("./routes/headLogin")
const imagesRouter=require("./routes/images")
const studentRouter=require("./routes/student")
const teacherRouter=require("./routes/teacher")
const headRouter=require("./routes/head")
const headTeacherRouter=require("./routes/headTeacher")
const authRouter=require("./controllers/authContoller");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/",homeRouter);
app.use("/studentLogin",studentLoginRouter);
app.use("/teacherLogin",teacherLoginRouter);
app.use("/headLogin",headLoginRouter);
app.use("/images",imagesRouter);
app.use("/student",studentRouter);
app.use("/teacher",teacherRouter);
app.use("/headTeacher",headTeacherRouter);
app.use("/head",headRouter);
app.use("/",headTeacherRouter);
app.use("/",headRouter);
app.use("/",authRouter);
app.use('/uploads', express.static('uploads'));


app.listen(3000);