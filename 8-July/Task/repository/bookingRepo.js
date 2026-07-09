const { TicketHandler } = require("../models/booking")

async function insertIntoDB(info) {
	const Ticket = new TicketHandler({
		bookingId: Number(info.bookingId),
		customerName: info.customerName,
		movieName: info.movieName,
		showTime: Date(info.showTime),
		seatNo: info.seatNo,
		ticketPrice: Number(info.ticketPrice)
	})
	const status = await Ticket.save()
	if (status) {
		console.info("Data inserted successfully")
	}
}

async function searchInDB(info) {
	 return await TicketHandler.find(info)
}

module.exports = {insertIntoDB, searchInDB}
