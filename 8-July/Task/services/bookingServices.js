const db = require("../repository/bookingRepo")

async function addBooking(info) {
	if ( info.ticketPrice < 0 ) {
		console.error("ticket price is negative")
	} else if (await db.searchInDB({ seatNumber: info.seatNumber }) ) {
		console.error("SeatNumber already booked")
	} else if ( info.movieName === '' ) { 
		console.error("Please provide movie name")
	} else if ( info.customerName === '' ) {
		console.error("Please provide customer name")
	} else if ( /\w\d+/.test(info.seatNumber) ) {
		console.error("Seat Number doesn't adhear to the standard")
	} else {
		console.log("Data saved successfully")
		db.insertIntoDB(info)
	}
}

async function getBooking() {
	let data = await db.searchInDB()
	console.log(data)
}

async function searchBooking(info) {
	let data = await db.searchInDB(info)
	console.log(data)
}

module.exports = {addBooking, getBooking, searchBooking}
