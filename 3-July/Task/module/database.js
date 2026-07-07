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

async function addUserToDB(name, age, balance) {
	const user = new User({
		'name': name,
		'age': age,
		'balance' : balance
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
		let user_output = await user.readUserFromFile(u_loc)
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
		let investment_output = await invest.readInvestmentFromFile(i_loc)
		investment_output = investment_output.replaceAll('\n', ',')
		investment_output = investment_output.split(",")
		for (let i = 0; i < investment_output.length; i += 2) {
			i_type = investment_output[i]
			i_amt = investment_output[i + 1]
			await addInvestmentToDB(i_type, i_amt)
		}
	} catch (err) {
		console.error(err)
	}
}

async function importFromDB(loc) {
	const u_output = await User.find()
	for (i = 0; i < u_output.length; i++) {
		await user.addUserToFile(loc[0], u_output[i].name, u_output[i].age, u_output[i].balance)
	}
	const i_output = await Invester.find()
	for (i = 0; i < i_output.length; i++) {
		await invest.addInvestmentToFile(loc[1], i_output[i].type, i_output[i].amt)
	}
}

function closeConnection() {
	mongoose.connection.close()
}

module.exports = { exportToDB, importFromDB, closeConnection }
