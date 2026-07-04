const input = require("prompt-sync")();
const user = require("./module/user");
const invest = require("./module/invest");

menu = `
=================================
1. Add User Details
2. Add Investment Details
3. Report User Details
4. Report Investment Details
5. Exit
=================================
`;

while (1) {
	console.log(menu)
	usr_input = Number(input("Enter: "))
	switch (usr_input) {
		case 1:
			user_name = input("Enter your name: ")
			user_age = Number(input("Enter your age: "))
			user_balance = Number(input("Enter your balance: "))
			user.addUser(user_name, user_age, user_balance)
			break
		case 2:
			investment_type = input("Enter investment type: ")
			investment_amt = Number(input("Enter investment amount: "))
			invest.addInvestment(investment_type, investment_amt)
			break
		case 3:
			user.readUser()
			break
		case 4:
			invest.readInvestment()
			break
		case 5:
			console.log("Exit")
			return
		default:
			console.error("Invalid option")
			break;
	}
}
