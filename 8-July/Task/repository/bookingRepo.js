const { TicketHandler } = require("../models/booking")

async function insertIntoDB(info) {
	const Ticket = new TicketHandler({
		// bookingid: info.bookingid,
		customerName: info.customerName,
		movieName: info.movieName,
		showTime: Date(info.showTime),
		seatNo: info.seatNo,
		ticketPrice: Number(info.ticketPrice)
	})
	const status = await Ticket.save()
	// console.log(status)
}

async function searchInDB(info) {
	const status = await TicketHandler.find(info)
	// console.info(status)
}

module.exports = {insertIntoDB, searchInDB}
