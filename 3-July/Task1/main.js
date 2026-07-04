const input = require("prompt-sync")();
const db = require("./db");

const menu = `
=================================
1. Add Student Details
2. Display Student detail
3. Exit
=================================
`;

async function main() {
	while (true) {
		console.log(menu);
		const usr_input = Number(input("Enter: "));

		switch (usr_input) {
			case 1: {
				const user_name = input("Enter your name: ");
				const user_age = Number(input("Enter your age: "));
				const user_course = input("Enter your course: ");
				await db.createStudent(user_name, user_age, user_course);
				break;
			}
			case 2:
				console.log("#########################################")
				await db.getStudents();
				console.log("#########################################")
				break;
			case 3:
				console.log("Exit");
				process.exit(1);
			default:
				console.error("Invalid option");
				break;
		}
	}
}

try {
	main()
} catch (err) {
	console.error("Fatal error:", err);
	process.exit(1);
};
