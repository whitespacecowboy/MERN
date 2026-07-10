const express = require("express"); 
const path=require("path");

const app = express();
app.use(express.json()); 
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));

// Route 
app.get("/", (req, res) => 
{ 
res.send("Welcome to Express Server"); 
}); 
app.get("/about", (req, res) =>
{
    res.send("About Page");
});
app.get("/contact", (req, res) =>
{
    res.send("Contact Page");
});
app.post("/save", (req, res) =>
{
    console.log(req.body)
    res.redirect("savesuccess");
    //res.send("Saving");
});
 app.get("/savesuccess", (req, res) =>
{
    res.send("Congratulations...Please check console.");
});
// Start Server 
app.listen(3000, () => { 

console.log("Express Server is running successfully"); 
console.log("Server URL: http://localhost:3000"); 
});
