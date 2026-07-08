//bookingRoutes.js under routes folder
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

router.get("/about", (req, res) => {
    res.send("About Page");
});

router.get("/contact", (req, res) => {
    res.send("Contact Page");
});

 
const bookingService = require("../services/bookingService");
router.post("/save", (req, res) => {
    bookingService.saveBooking(req.body);
    res.redirect("/savesuccess");
});

module.exports = router;

router.get("/savesuccess", (req, res) => {
    res.send("Congratulations...Please check console.");
});

module.exports = router;