const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/", (req, res) => {
    let filename = path.join(__dirname, "..", "public", "index.html")
    res.redirect(filename)
});

router.listen(3000, () => {
    console.log("Server URL: http://localhost:3000");
});