const mongoos = require("mongoose")

let EmployeeHandle;

async function connect() {
	try {
		await mongoos.connect('mongodb://localhost:27017/Employee', {serverSelectionTimeoutMS: 3000})
	} catch (error) {
		throw new Error("Database didn't not connect")
	}

	const EmployeeSchema = mongoos.Schema({
		empID: Number,
		name: String,
		department: String,
		designation: String,
		salary: Number
	})

	EmployeeHandle = mongoos.model("Employee_table", EmployeeSchema)

}


async function readEmployee(attributes) {
	const records = await EmployeeHandle.find(attributes)
	
	if (records.length == 0) {
		console.log("No records to show")
		return
	}

	for (let i = 0; i < records.length; i++) {
		console.log("============================")
		console.log("Id: ", records[i].empID)
		console.log("Name: ", records[i].name)
		console.log("Department: ", records[i].department)
		console.log("Desination: ", records[i].designation)
		console.log("Salary: ", records[i].salary)
	}
	console.log("============================")
}

async function updateEmployee(parameters) {
	let records = await EmployeeHandle.updateOne(parameters[0], parameters[1])
	if (records.modifiedCount == 1) {
		console.log("Updated successfully")
	} else if (records.matchedCount == 0) {
		console.error("Not found")
	}
}

async function insertEmployee(attributes) {
	const Employ = new EmployeeHandle({
		empID: attributes.empID,
		name: attributes.name,
		department: attributes.department,
		designation: attributes.designation,
		salary: attributes.salary
	});
	let status = await Employ.save();
	if (status._id) {
		console.log("Record Inserted successfully")
	} else {
		console.error("Something went wrong")
	}
}

async function deleteEmployee(attr) {
	let status = await EmployeeHandle.deleteOne(attr)
	if (status.deletedCount >= 1) {
		console.log("record deleted successfully");
	} else {
		console.error("Something went wrong")
	}
}

async function exit() {
	await mongoos.connection.close()
}

module.exports = {exit, deleteEmployee, updateEmployee, insertEmployee, readEmployee, connect}
