const db = require("../repository/bookingRepo")

async function addBooking(info) {
	if (info.bookingId <= 0) {
		console.error("Booking id can't be zero or negative")
	} else if ( info.ticketPrice < 0 ) {
		console.error("ticket price is negative")
	} else if ((await db.searchInDB({ seatNo: info.seatNo })).length != 0 ) {
		console.error("SeatNumber already booked")
	} else if ( info.movieName === '' ) { 
		console.error("Please provide movie name")
	} else if ( info.customerName === '' ) {
		console.error("Please provide customer name")
	} else if (! /\w\d+/.test(info.seatNo) ) {
		console.error("Seat Number doesn't adhear to the standard")
	} else {
		db.insertIntoDB(info)
	}
}

async function searchBooking(info) {
	return await db.searchInDB(info)
}

module.exports = {addBooking, searchBooking}
