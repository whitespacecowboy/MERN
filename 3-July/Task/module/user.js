const fsOperation = require("fs");

function addUserToFile(filename, buffer) {
	return new Promise((resolve, rejects) => {
		if (buffer[0] == "" || buffer[1] <= 0) {
			return rejects("Invalid name or age");
		}
		console.log(`${buffer}\n`)
		fsOperation.appendFile(filename, `${buffer.toString()}\n`, 'utf-8', (err) => {
			if (err) {
				return rejects(err.message)
			}
			resolve(1)
		})
	})
}

function readUserFromFile(filename) {
	return new Promise((resolve, rejects) => {
		fsOperation.readFile(filename, 'utf-8', (err, data) => {
			if (err) {
				return rejects(err.message)
			}
			resolve(data)
		})
	})
}

module.exports = { addUserToFile, readUserFromFile}
