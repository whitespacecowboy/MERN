const mongoos = require("mongoose")
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

if (process.argv.length <= 2) {
    console.error("Insufficent arguments")
}

try {
    mongoos.connect('mongodb://localhost:27017/Employee')
} catch (error) {
    console.error(error)
}

const EmployeeSchema = mongoos.Schema({
    empID: Number,
    name: String,
    department: String,
    designation: String,
    salary: Number
})

const EmployeeHandle = mongoos.model("Employee_table", EmployeeSchema)

async function readEmployee(attributes) {
    const result = await EmployeeHandle.find(attributes)
    for (i = 0; i < result.length; i++) {
        console.log("============================")
        console.log("Id: ", result[i].empID)
        console.log("Name: ", result[i].name)
        console.log("Department:: ", result[i].department)
        console.log("Desination: ", result[i].designation)
        console.log("Salary: ", result[i].salary)
    }
    console.log("============================")
}

async function updateEmployee(what, to) {
    console.log(what)
    console.log(to)
    let result = await EmployeeHandle.updateOne(what, to)
    console.log(result)
}

async function insertEmployee(attributes) {
    const Employ = new EmployeeHandle({
        empID: attributes.empID,
        name: attributes.name,
        department: attributes.department,
        designation: attributes.designation,
        salary: attributes.salary
    });
    await Employ.save();
}

async function deleteEmployee(attr) {
    if (await EmployeeHandle.deleteOne(attr)) {
        console.log("Deleted record successfully");
    } else {
        console.error("Something went wrong")
    }
}

async function main() {
    const { _, ...para } = args
    switch (process.argv[2]) {
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
            await updateEmployee(
                JSON.parse(args.where),
                JSON.parse(args.to)
            )
            break;
        case 'delete':
            await deleteEmployee(para)
            break;
        case 'read':
            await readEmployee(para)
            break
        case 'help':
            console.log("<OPERATION> <ARGS> <VALUE>")
            break;
        default:
            console.error("Incorrect Argument")
            break;
    }
    process.exit(1)
}

main()