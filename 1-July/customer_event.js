const EventEmitter = require('events');
const restaurant = new EventEmitter();

process.on('uncaughtException', (err) => {
    console.log("Uncought Error Occurred");
    console.log(err.message);
})

restaurant.on('foodReady', (food) => {
    console.log(`Waiter Serving: ${food}`);
});

restaurant.on('customerArrived', (customer) => {
    console.log(`Customer Entered: ${customer}`);
});

function placeOrder(customer, food, cookingTime) {
    restaurant.emit('customerArrived', customer);
    console.log(`${customer} Ordered: ${food}`);
    setTimeout(() => {
        console.log(`Chef Prepared: ${food}`);
        restaurant.emit('foodReady', food);
    },
    cookingTime);
}

abc()

console.log('Welcome to Node.js Café');
placeOrder('Rahul', 'Coffee', 10000);
placeOrder('Simran', 'Pizza', 40000);
placeOrder('Aman', 'Cold Drink', 5000);
placeOrder('Neha', 'Burger', 30000);

console.log('Chef is managing multiple orders without blocking...');