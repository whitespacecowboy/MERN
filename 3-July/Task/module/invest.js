const fs = require("fs/promises")

// function addInvestmentToFile(filename, buffer) {
// 	return new Promise((resolve, reject) => {
// 		fsOperation.appendFile(filename, `${buffer.toString()}\n`, 'utf-8', (err) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve(1)
// 		})
// 	})
// }

async function addInvestmentToFile(filename, buffer) {
	await fs.appendFile(filename, `${buffer.toString()}\n`, 'utf-8')
	return 1
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
//

async function readInvestmentFromFile(filename) {
	const data = await fs.readFile(filename, 'utf-8')
	return data
}

module.exports = {addInvestmentToFile, readInvestmentFromFile}
