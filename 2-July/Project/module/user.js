const fsOperation = require("fs");
const os = require('os');

let filename;

if (os.platform() === 'win32') {
	filename = "C:\\Users\\jagbi\\OneDrive\\Documents\\MERN\\2 July\\Project\\Data\\user.txt";
} else if (os.platform() === 'linux') {
	filename = "/home/Mani/MERN/2 July/Project/Data/user.txt";
}

function addUser(name, age, balance) {
	if (name == "" || age <= 0) {
		console.log("Invalid name or age");
		return;
	}

	buffer = [ name, age, balance ]
	try {
		fsOperation.appendFileSync(filename, `${buffer.toString()}\n`, 'utf-8')
	} catch (err) {
		console.error(err)
	}
	// fsOperation.appendFile(filename, buffer.toString() , 'utf-8', (err) => {
	// 	if (err) {
	// 		console.error(err.message)
	// 		return;
	// 	}
	// })
}

function readUser() {
	// 	fsOperation.readFileSync(filename, 'utf-8', (err, data) => {
	// 		if (err) {
	// 			console.error(err.message)
	// 			return;
	// 		}
	// 		console.log(data);
	// 	})

	try {
		console.log(fsOperation.readFileSync(filename, 'utf-8'))
	} catch (err) {
		console.error(err)
	}
}
module.exports = { addUser, readUser }
