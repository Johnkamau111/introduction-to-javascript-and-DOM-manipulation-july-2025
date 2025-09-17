// 🚀 Assignment: Mastering JavaScript Fundamentals

// 🎯 Part 1: Variables, Conditionals
let userName = "John";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult ✅`);
} else {
  console.log(`${userName} is a minor ❌`);
}

// ❤️ Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript 🚀`;
}

// Test functions in console
console.log(calculateTotal(10, 3));
console.log(formatGreeting("Alice"));

// 🔁 Part 3: Loops
let numbers = [1, 2, 3, 4, 5];

// Example 1: for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(`Number: ${numbers[i]}`);
}

// Example 2: while loop
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// 🌐 Part 4: DOM Manipulation
const btnCheckAge = document.getElementById("btnCheckAge");
const btnToggleText = document.getElementById("btnToggleText");
const btnGenerateList = document.getElementById("btnGenerateList");
const output = document.getElementById("output");

// 1. Event listener for checking age
btnCheckAge.addEventListener("click", function() {
  output.innerHTML = (userAge >= 18)
    ? `${userName}, you are allowed! 🎉`
    : `${userName}, sorry you are too young. 🚫`;
});

// 2. Toggle text content
btnToggleText.addEventListener("click", function() {
  if (output.innerHTML === "Hello World 🌍") {
    output.innerHTML = "";
  } else {
    output.innerHTML = "Hello World 🌍";
  }
});

// 3. Generate a list dynamically
btnGenerateList.addEventListener("click", function() {
  output.innerHTML = ""; // clear previous
  let ul = document.createElement("ul");
  numbers.forEach(num => {
    let li = document.createElement("li");
    li.textContent = `Number ${num}`;
    ul.appendChild(li);
  });
  output.appendChild(ul);
});
