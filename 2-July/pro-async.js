function orderFood(foodItem) {
    return new Promise((resolve, reject) =>
    {
        console.log("=================================");
        console.log("Welcome to Food Express");
        console.log("=================================");

        console.log(`Order received for: ${foodItem}`);
        console.log("Chef has started preparing your food...");
        console.log("Please wait while your food is being cooked.\n");

        // Simulating food preparation time
        setTimeout(() => {
            resolve(`${foodItem} is ready! Enjoy your meal.`);
        }, 3000);
    });
}

// Customer places order
orderFood("Paneer Tikka")
    .then((message) => {
        console.log("\n=================================");
        console.log("Notification:");
        console.log(message);
        console.log("=================================");
    })
    .catch((error) => {
        console.log(error);
    });

// These lines execute immediately
console.log("Customer can continue chatting while food is preparing...");
console.log("Restaurant can take other customer orders as well...");