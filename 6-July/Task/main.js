const minimist = require("minimist");
const path = require("path")

const args = minimist(process.argv.slice(2));
const { deleteEmployee, updateEmployee, insertEmployee, readEmployee, exit } = require("./database");

function parseArgs(parameters) {
	let from = {}
	let to = {}
	for (i of Object.keys(parameters)) {
		if (i[0] == 'f') {
			from[i.slice(1)] = parameters[i];
		} else if (i[0] == 't') {
			to[i.slice(1)] = parameters[i];
		} else {
			console.error("Invalid argument")
			return
		}
	}
	return [from, to]
}

async function main() {
	if (process.argv.length <= 2) {
		console.error("Insufficent arguments")
		return -1;
	}
	const { _, ...parameters } = args
	switch (process.argv[2]) {
		case 'help':
			let filename = path.basename(__filename)
			console.log(`node ${filename} <OTP> <ARGS>`)
			console.log(`node ${filename} [insert|read|delete] --name <name> --empID <id> --department <dep> --designation <des> --salary <sal>`)
			console.log(`node ${filename} update --f[name|empID|department|designation|salary] --t[name|empID|department|designation|salary]`)
			break;
		case 'insert':
			await insertEmployee(
				{
					empID: args.empID,
					name: args.name,
					department: args.department,
					designation: args.designation,
					salary: args.salary
				}
			)
			break;
		case 'update':
			await updateEmployee(parseArgs(parameters))
			break;
		case 'delete':
			await deleteEmployee(parameters)
			break;
		case 'read':
			await readEmployee(parameters)
			break
		default:
			console.error("Incorrect Argument")
			break;
	}
	exit()
}
main()