const mongoose = require("mongoose")

async function connectDB() {
	try {
		await mongoose.connect("mongodb://localhost:27017/booking")
		console.info("Datbase connected successfully")
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

connectDB()

const Ticket = mongoose.Schema({
	bookingId: Number,
	customerName: String,
	movieName: String,
	showTime: Date,
	seatNo: String,
	ticketPrice: Number
})

const TicketHandler = mongoose.model("ticket_table", Ticket)

module.exports = { TicketHandler }
