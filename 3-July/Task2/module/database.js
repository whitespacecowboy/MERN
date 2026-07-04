const mongoose = require("mongoose");
const user = require("./user")
const invest = require("./invest")

mongoose.connect('mongodb://localhost:27017/MyDB')
	.then(() => console.log("connected to DB"))
	.catch((err) => console.error(err))


const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	balance: Number
})

const investSchema = new mongoose.Schema({
	type: String,
	amt: Number
})

const User =  mongoose.model('user_table', userSchema)
const Invester = mongoose.model('invest_table', investSchema)

async function addUserToDB(name, age, course) {
	const user = new User({
		'name': name,
		'age': age,
		'course' : course
	});
	await user.save();
}

async function addInvestmentToDB(type, amt) {
	const invest = new Invester({
		type: type,
		amt: amt
	});
	await invest.save();
}

async function exportToDB(u_loc, i_loc) {
	try {
		user_output = await user.readUser(u_loc)
		user_output = user_output.replaceAll('\n', ',')
		user_output = user_output.split(",")
		for (let i = 0; i < user_output.length; i += 3) {
			u_name = user_output[i]
			u_age = user_output[i + 1]
			u_balance = user_output[i + 2]
			await addUserToDB(u_name, u_age, u_balance)
		}
	} catch (err) {
		console.error(err)
	}

	try {
		investment_output = await invest.readInvestment(i_loc)
		investment_output = investment_output.replaceAll('\n', ',')
		investment_output = investment_output.split(",")
		for (let i = 0; i < investment_output.length; i += 2) {
			i_type = user_output[i]
			i_amt = user_output[i + 1]
			await addInvestmentToDB(i_type, i_amt)
		}
	} catch (err) {
		console.error(err)
	}
}

function importFromDB() {
	return
}

module.exports = { exportToDB, importFromDB }
