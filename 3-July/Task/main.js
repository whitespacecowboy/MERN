const input = require("prompt-sync")();
const user = require("./module/user");
const invest = require("./module/invest");
const db = require("./module/database")
const path = require('path')

let u_location = path.join(__dirname, 'Data', 'user.txt')
let i_location = path.join(__dirname, 'Data', 'invest.txt')

menu = `
=================================
1. Add User Details
2. Add Investment Details
3. Report User Details
4. Report Investment Details
5. Export to database
6. Import from database
7. Exit
=================================
`;

async function main() {
	let output;
	while (1) {
		console.log(menu)
		usr_input = Number(input("Enter: "))
		switch (usr_input) {
			case 1:
				user_name = input("Enter your name: ")
				user_age = Number(input("Enter your age: "))
				user_balance = Number(input("Enter your balance: "))
				await user.addUserToFile(u_location, [user_name, user_age, user_balance])
				break
			case 2:
				investment_type = input("Enter investment type: ")
				investment_amt = Number(input("Enter investment amount: "))
					await invest.addInvestmentToFile(i_location, [investment_type, investment_amt])
				break
			case 3:
				output = await user.readUserFromFile(u_location)
				console.log(output)
				break
			case 4:
				output = await invest.readInvestmentFromFile(i_location)
				console.log(output)
				break
			case 5:
					await db.exportToDB(u_location, i_location)
				break
			case 6:
					await db.importFromDB([u_location, i_location])
				break
			case 7:
				console.log("Exit")
				db.closeConnection()
				return
			default:
				console.error("Invalid option")
				break;
		}
	}
}

try {
	main()
} catch (err) {
	console.error(err)
}
