const fsOperation = require("fs");
const path = require('path');

function addUser(filename, name, age, balance) {
	return new Promise((resolve, rejects) => {
		if (name == "" || age <= 0) {
			return rejects("Invalid name or age");
		}
		buffer = [ name, age, balance ]
		fsOperation.appendFile(filename, `${buffer.toString()}\n`, 'utf-8', (err) => {
			if (err) {
				return rejects(err.message)
			}
			resolve(1)
		})
	})
}

function readUser(filename) {
	return new Promise((resolve, rejects) => {
		fsOperation.readFile(filename, 'utf-8', (err, data) => {
			if (err) {
				return rejects(err.message)
			}
			resolve(data)
		})
	})
}

module.exports = { addUser, readUser}
