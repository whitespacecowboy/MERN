//app.js
const express = require("express");
const path = require("path");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

const bookingRoutes = require("./Layering/routes/bookingRoutes");

app.use("/", bookingRoutes);

app.listen(3000,()=>{
    console.log("Server Running...");
});