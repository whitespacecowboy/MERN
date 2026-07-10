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
	console.log(req.body)
	res.redirect("/success")
    res.status(201)
	res.end()
});

app.post("/search", async (req, res) => {
	console.log(req.body)
	const result = await searchBooking({ bookingId: Number(req.body.searchId) })
	res.send(result)
    res.status(200)
	res.end()
});

app.get("/success", (req, res) => {
	res.send("Added successfully")
	res.end()
})

app.get("/viewall", async (req, res) => {
	const output = await searchBooking()
	// for (v of output) {
	// 	res.send(v)	
	// }
	res.send(output)
    res.status(200)
	res.end()
});

// app.get("/*", async (req, res) => {
//     res.send("404")
//     res.status(404)
// });

app.listen(PORT, () => {
	console.info(`Server URL: http://localhost:${PORT}`);
});
