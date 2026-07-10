const express = require("express")
const {addBooking, searchBooking} = require("../services/bookingServices")

const app = express()
const path = require("path")
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
	res.redirect("/success")
});

app.post("/search", async (req, res) => {
	const result = await searchBooking({ bookingId: Number(req.body.searchId) })
	res.send(result)
});

app.get("/success", (req, res) => {
	res.send("Added successfully")
})

app.get("/viewall", async (req, res) => {
	const output = await searchBooking()
	res.send(output)
});

app.listen(PORT, () => {
	console.info(`Server URL: http://localhost:${PORT}`);
});
