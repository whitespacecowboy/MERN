const express = require("express")
const {addBooking, searchBooking, getBooking} = require("../services/bookingServices")

const app = express()
const path = require("path")
const PORT = 3000

const public_d = path.join(__dirname, "..", "public")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(public_d))


app.get("/", (req, res) => {
	let filename = path.join(public_d, 'index.html')
	res.render(filename)
});

app.post("/add", async (req, res) => {
	await addBooking(req.body)	
	console.log(req.body)
});

app.post("/search", (req, res) => {
	console.log(req.body)
});

app.listen(PORT, () => {
	console.info("Server URL: http://localhost:3000");
});
