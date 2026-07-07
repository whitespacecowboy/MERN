const fsOperation = require("fs")

// function addInvestmentToFile(filename, type, amt) {
// 	return new Promise((resolve, reject) => {
// 		buffer = [type, amt]
// 		fsOperation.appendFile(filename, `${buffer.toString()}\n`, 'utf-8', (err) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve(1)
// 		})
// 	})
// }

async function addInvestmentToFile(filename, type, amt) {
	buffer = [type, amt]
	await fsOperation.appendFile(filename, `${buffer.toString()}\n`, 'utf-8', (err) => {
		if (err) {
			return new Error(err.message)
		}
		return 1
	})
}

// function readInvestmentFromFile(filename) {
// 	return new Promise((resolve, reject) => {
// 		fsOperation.readFile(filename, 'utf-8', (err, data) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve(data)
// 		})
// 	})
// }

async function readInvestmentFromFile(filename) {
	await fsOperation.readFile(filename, 'utf-8', (err, data) => {
		if (err) {
			return new Error(err.message)
		}
		console.log(data)
	})
}

module.exports = {addInvestmentToFile, readInvestmentFromFile}
