// //bookingRepository under models folder
// const bookingModel = require("../models/bookingModel");

// exports.saveBooking = (booking) => {
//     bookingModel.save(booking);
// };

const Booking = require("../models/bookingModel");

exports.saveBooking = async (booking) => {
    await Booking.create(booking);
};