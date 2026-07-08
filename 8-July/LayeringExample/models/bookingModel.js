//bookModel.js under models folder
// let bookings = [];

// exports.save = (booking) => {
//     bookings.push(booking);
//     console.log("Printing at " + JSON.stringify(bookings));
// };
const mongoose = require("mongoose");
const connectDB = require("../config/db");

connectDB();
const bookingSchema = new mongoose.Schema({
    name: String,
    age: Number,
    salary: Number
});

module.exports = mongoose.model("Booking", bookingSchema);