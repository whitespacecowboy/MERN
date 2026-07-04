const fsOperation = require("fs")
const path = require('path');

function addInvestment(filename, type, amt) {
	return new Promise((resolve, reject) => {
		buffer = [type, amt]
		fsOperation.appendFile(filename, `${buffer.toString()}\n`, 'utf-8', (err) => {
			if(err) {
				return reject(err.message)
			}
			resolve(1)
		})
	})
}

function readInvestment(filename) {
	return new Promise((resolve, reject) => {
		fsOperation.readFile(filename, 'utf-8', (err, data) => {
			if(err) {
				return reject(err.message)
			}
			resolve(data)
		})
	}) 
}

module.exports = {addInvestment, readInvestment}
