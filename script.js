// Operator Buttons
const buttons = document.querySelectorAll('button')

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
let storeFirstNumber= 0;
let storeSecondNumber= 0;

// store Datatype variable
let dataType = '';

// Call Operator Fns
let operatorValue = null;
const operator = (e) => {
    operatorValue = e.target.value;
};

// displayValue Fn
const displayResult = (e) => {
    const buttonValue = e.target.value;
    const displayValue = parseInt(displayScreen.textContent);
    dataType = e.target.dataset.type;
    console.log(dataType);
    if (dataType === 'number') {
        if(displayValue === storeFirstNumber) {
            displayScreen.textContent = buttonValue;
        } else {
            const checkDisplayValue = (displayValue === 0 || null) ? displayScreen.textContent = buttonValue : displayScreen.textContent += buttonValue;
            return checkDisplayValue;
        }
    } else if (dataType === 'operator') {
        operator(e);
        storeFirstNumber = displayValue;

    } else if (dataType === 'sum') {
        storeSecondNumber = displayValue;
        return displayScreen.textContent = operate(operatorValue, storeFirstNumber, storeSecondNumber);

    } else if (dataType === 'clear') {
        storeFirstNumber = 0;
        storeSecondNumber = 0;
        operatorValue = null;
        displayScreen.textContent = 0;
    }
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


// foreach buttons and addEventListener
buttons.forEach(button => button.addEventListener('click', displayResult));





