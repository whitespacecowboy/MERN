const fsOperation = require("fs")
const os = require('os');

if (os.platform() === 'win32') {
	filename = "C:\\Users\\jagbi\\OneDrive\\Documents\\MERN\\2 July\\Project\\Data\\invest.txt";
} else if (os.platform() === 'linux') {
	filename = "/home/Mani/MERN/2 July/Project/Data/invest.txt";
}

function addInvestment(type, amt) {
	if (type == "" || amt == 0) {
		console.log("Invalid details");
		return;
	}

	buffer = [type, amt]

	try {
		fsOperation.appendFileSync(filename, `${buffer.toString()}\n`, 'utf-8') 
	} catch (err) {
		console.error(err)
	}

	// fsOperation.appendFile(filename, buffer.toString() , 'utf-8', (err) => {
	// 	if(err) {
	// 		console.error(err.message)
	// 		return;
	// 	}
	// })
}

function readInvestment() {
	try {
		console.log(fsOperation.readFileSync(filename, 'utf-8'))
	} catch (err) {
		console.error(err)
	}
	// fsOperation.readFile(filename, 'utf-8', (err, data) => {
	// 	if(err) {
	// 		console.error(err.message)
	// 		return;
	// 	}
	// 	console.log(data);
	// })
}

module.exports = {addInvestment, readInvestment}
