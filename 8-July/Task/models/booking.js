const mongoose = require("mongoose")

try {
    await mongoose.connect("mongodb://localhost:27017/booking")
} catch (err) {
    console.log(err)
    process.exit(1)
}

const Ticket = mongoose.Schema({
    id: Number,
    customer: String,
    movie_name: String,
    time: String,
    seat: Number,
    price: Number
})

let TicketHandler = mongoose.model("ticket_table", Ticket)

module.exports = TicketHandler