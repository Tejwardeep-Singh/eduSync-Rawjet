const jwt = require("jsonwebtoken");
const headModel = require("../models/headDetails");
const flash=require("flash");

module.exports = async function (req, res, next) {
    if (!req.cookies.token) {
        req.flash("error", "You need to login first.");
        return res.redirect("/headLogin");
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        const user = await headModel.findOne({id:decoded._id}); 

        if (!user) {
            req.flash("error", "User not found. Please login again.");
            return res.redirect("/");
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("Auth Middleware Error:", err);
        req.flash("error", "Invalid token. Please login again.");
        res.redirect("/");
    }
};