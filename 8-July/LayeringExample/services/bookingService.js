//bookingService-under service folder
const bookingRepos = require("../repository/bookingRepository");

exports.saveBooking = (booking) => {

    //console.log("Business Logic");

    //console.log(booking);
    bookingRepos.saveBooking(booking);


};