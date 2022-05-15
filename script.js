// Operator Buttons
const operatorButtons = document.querySelectorAll('.operators')

// sum Button
const sumBtn = document.querySelector('#sum');

// Number Buttons
const numButtons = document.querySelectorAll('.numbers');

// display Container
const displayScreen = document.querySelector('.display-container');

// Operator Functions
// Add Fn
const add = (a, b) => a + b;

// Subtract Fn
const subtract = (a, b) => a - b;

// Multiply Fn
const multiply = (a, b) => a * b;

// Divide Fn
const divide = (a, b) => a / b;

// Global variables to store Numbers
let storeFirstNumber= [];
let storeSecondNumber= [];

// displayValue Fn
const displayResult = (e) => {
    return displayScreen.textContent += e.target.value;
};

// Operate Fn 
// The Function take an Arithmetic Operator and call one of the above Functions
const operate = (opeartor, num1, num2) => {
    if (opeartor === '+') {
        return add(num1, num2);
    }
    else if (opeartor === '-') {
        return subtract(num1, num2);
    }
    else if (opeartor === '*') {
        return multiply(num1, num2);
    }
    else if (opeartor === '/') {
        return divide(num1, num2);
    }
};

// Call Operator Fns
let operatorValue = null;
const operator = (e) => {
    operatorValue = e.target.value;
    displayScreen.textContent += ` ${operatorValue} `;
};

// addEventListener to numButtons
numButtons.forEach(numButton => {
    numButton.addEventListener('click', displayResult)
});

// addEventListener to operatorButtons
operatorButtons.forEach(operButton => {
    operButton.addEventListener('click', operator);
});


// Sum Fn
const sum = () => {
    return displayScreen.textContent = operate(operatorValue, storeFirstNumber, storeSecondNumber);
}

sumBtn.addEventListener('click', sum);



