// Declaring working pair of numbers
let currentNum1;
let currentNum2;

let displayArray = [];

// Operate functions
const add = (a,b) => (a + b);
const subtract = (a,b) => (a - b);
const multiply = (a,b) => (a * b).toFixed(1);
const divide = (a,b) => {
    if (b == 0) {
        return "click AC";
    }
        return (a / b).toFixed(1)};

// Takes a array and appends results to displayArray
function operate(array0) {
    if (array0.slice(1).includes('+')) {
        let index = array0.indexOf('+');

        arrayNum1 = array0.slice(0,index);
        currentNum1 = Number(arrayNum1.join(""));

        arrayNum2 = array0.slice(index+1);
        currentNum2 = Number(arrayNum2.join(""));

        let result = ((add(currentNum1, currentNum2)).toString()).split(''); // result is ['2','2'] instead of [22]
        clear();
        displayArray = [...result];
        displayOnScreen(displayArray);

    }

    else if (array0.slice(1).includes('*')) {
        let index = array0.indexOf('*');

        arrayNum1 = array0.slice(0,index);
        currentNum1 = Number(arrayNum1.join(""));

        arrayNum2 = array0.slice(index+1);
        currentNum2 = Number(arrayNum2.join(""));

        let result = ((multiply(currentNum1, currentNum2)).toString()).split('');
        clear();
        displayArray = [...result];
        displayOnScreen(displayArray);

    } else if (array0.slice(1).includes('/')) {
        let index = array0.indexOf('/');

        arrayNum1 = array0.slice(0,index);
        currentNum1 = Number(arrayNum1.join(""));

        arrayNum2 = array0.slice(index+1);
        currentNum2 = Number(arrayNum2.join(""));

        let result = ((divide(currentNum1, currentNum2)).toString()).split('');
        clear();
        displayArray = [...result];
        displayOnScreen(displayArray);

    } else if (array0.includes('-')) {
        let index = array0.indexOf("-", array0.indexOf("-") + 1);

        if (index === -1) {
            index = array0.indexOf("-");
        }

        arrayNum1 = array0.slice(0,index);
        currentNum1 = Number(arrayNum1.join(""));

        arrayNum2 = array0.slice(index+1);
        currentNum2 = Number(arrayNum2.join(""));

        let result = ((subtract(currentNum1, currentNum2)).toString()).split('');
        clear();
        displayArray = [...result];
        displayOnScreen(displayArray);
    };
};

// Displays content on calculator screen
function displayOnScreen(array1) {
    if (array1.length > 10) {
        clear();
        document.querySelector("p").textContent = "This calculator only supports 10 characters at a time. Screen will be cleared on adding 11th character.";
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
const equal = numberDivs.pop(); // "equals" is the last element in numberDivs

// Operating on clicking "equals"
equal.addEventListener("click", operateEqual);

function operateEqual() {
    if (displayArray[displayArray.length -1] !== '+'&& displayArray[displayArray.length -1] !== '-' && displayArray[displayArray.length - 1] !== '*' && displayArray[displayArray.length -1] !== '/') {
        operate(displayArray);
    };
}

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
        operate(displayArray);
        displayArray.push(e.target.textContent);
        displayOnScreen(displayArray);
    }

    // Adds operator if number ahead
    else if (displayArray.length > 0 ) {
        displayArray.push(e.target.textContent);
        displayOnScreen(displayArray);
    };
};
