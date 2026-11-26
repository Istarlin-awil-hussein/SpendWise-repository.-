

// SpendWise Budget Application

// 1. Variables
let budget = 0;
let expenses = 0;
let balance = 0;

// 2. Collect user input
budget = Number(prompt("Enter your monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));

// 3. Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 4. Calculate remaining balance
balance = calculateBalance(budget, expenses);

// 5. Display results
console.log("Welcome to SpendWise!");
console.log("Your Budget: " + budget);
console.log("Your Expenses: " + expenses);
console.log("Your Remaining Balance: " + balance);
