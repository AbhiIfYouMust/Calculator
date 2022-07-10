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
    };
};

// Declaring working pair of numbers
let currentNum1;
let currentNum2;

const displayArray = [];

// Displays content on calculator screen
function displayOnScreen(array1) {
    if (array1.length > 9) {
        clear();
         //ADD THIS CODE
    } else {
    document.querySelector("#display").textContent = array1.join("");
    };
};

// Clears screen
function clear() {
    // Empties displayArray
    displayArray.length = 0;
    document.querySelector("#display").textContent = displayArray.join("");
}

// Creating a list of number divs 
const nodeNumberDivs = document.querySelectorAll(".number");
const numberDivs = Array.from(nodeNumberDivs);

// Removing "equals" from NumberDivs
const equals = numberDivs.pop(); // "equals" is the last element in numberDivs

// Event listeners for numberDivs 
numberDivs.forEach(numberDiv => numberDiv.addEventListener("click", displayDigits));

function displayDigits(e) {
    displayArray.push(e.target.textContent);
    displayOnScreen(displayArray);
};

//Creating a list of operators
const nodeOperatorDivs = document.querySelectorAll(".operator");
const operatorDivs = Array.from(nodeOperatorDivs);

// Removing "AC" from operatorDivs
const AC = operatorDivs.shift(); // "AC" is the first element in operatorDivs

// Clearing screen on clicking AC
AC.addEventListener("click", clear);

// Event listener for operator divs
operatorDivs.forEach(operatorDiv => operatorDiv.addEventListener("click", displayOperator));

function displayOperator(e) {
    // Replaces "operator" if a operator is already on newline
    if (displayArray[displayArray.length -1] === '+'|| displayArray[displayArray.length -1] === '-'|| displayArray[displayArray.length - 1] === '*'|| displayArray[displayArray.length -1] === '/') {
        displayArray.pop();
        displayArray.push(e.target.textContent);
        displayOnScreen(displayArray);

    // Evaluates if two numbers and a operator present    
    } else if ((displayArray.slice(1, displayArray.length - 1)).includes('+') || (displayArray.slice(1, displayArray.length - 1)).includes('-') || (displayArray.slice(1, displayArray.length - 1)).includes('*') || (displayArray.slice(1, displayArray.length - 1)).includes('/')) { 
        // TODO evaluate function
        clear();
    }

    // Adds operator if number ahead
    else if (displayArray.length > 0 ) {
        displayArray.push(e.target.textContent);
        displayOnScreen(displayArray);
    };
};