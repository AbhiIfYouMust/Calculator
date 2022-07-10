// Operate functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => (a / b).toFixed(1);

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

// Declaring working pair of numbers
let currentNum1;
let currentNum2;

let displayArray = ["3",".","2","3",".","2","3",".","2","3",".","2"];

// Displays content on calculator screen
function displayOnScreen(array1) {
    if (array1.length > 9) {
        array1 = [];
        document.querySelector("p").textContent = "This calculator only supports 10 characters at a time."
    } else {
    document.querySelector("#display").textContent = array1.join("");
    document.querySelector("p").textContent = "";
    }
};

displayOnScreen(displayArray);