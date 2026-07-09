const express = require("express")
const {addBooking, searchBooking} = require("../services/bookingServices")

const app = express()
const path = require("path")
const { searchInDB } = require("../repository/bookingRepo")
const PORT = 3000

const public_d = path.join(__dirname, "..", "public")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(public_d))


app.get("/", (req, res) => {
	let filename = path.join(public_d, 'index.html')
	res.sendFile(filename)
});

app.post("/add", async (req, res) => {
	await addBooking(req.body)
	console.log(req.body)
});

app.post("/search", async (req, res) => {
	const request = req.body
	console.log(req.body)
	const result = await searchBooking({ bookingId: Number(request.searchId) })
});

app.get("/viewall", async (req, res) => {
	const output = await searchInDB()
	console.log(output)
});

app.listen(PORT, () => {
	console.info("Server URL: http://localhost:3000");
});
