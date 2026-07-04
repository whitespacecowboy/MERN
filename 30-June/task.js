input = require("prompt-sync")()

students = [ "Satnam", "Manvir", "Ashish", "Gunbir", "Darshu", "Sukhi" ]

// Q1. Display all student names
students.forEach(i => {
    console.log(i)
});

numbers = [24, 27, 84, 63, 84, 83989, 92]

// Q2. Count even numbers
count = 0
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        count++
    }
}
console.log("Even number count:", count)

// Q3. Find the largest number
max = 0
for (i of numbers) {
    if (i > max) {
        max = i
    }
}
console.log("Largest number in array: " + max)

// Q4. Search for a Month
months = ["june", "august", "september", "october", "november", "december" ]
usr_input = input("Enter a month name: ");
if (months.indexOf("June".toLocaleLowerCase()) == -1) {
    console.log("Not Present")
} else {
    console.log("Present")
}

// Q5. Calculate sum and avg
function sum(lst) {
    result = 0
    for (let i of lst) {
        result += i
    }
    return result
}

function avg(lst) {
    return sum(lst) / lst.length
}

console.log("Sum of array: ", sum(numbers))
console.log("Avg of array: ", avg(numbers))