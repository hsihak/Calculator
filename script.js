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
let storeFirstOperand= 0;
let storeSecondOperand= 0;

// store Datatype variable
let dataType = '';

// Call Operator Fns
let operatorValue = null;
const operator = (e) => {
    operatorValue = e.target.value;
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

// displayValue Fn
const displayResult = (e) => {
    const buttonValue = e.target.value;
    const displayValue = parseInt(displayScreen.textContent);
    dataType = e.target.dataset.type;

    switch(dataType) {
        case 'number':
            if(displayValue === storeFirstOperand) {
                displayScreen.textContent = buttonValue;
            } else {
                const checkDisplayValue = (displayValue === 0) ? displayScreen.textContent = buttonValue : displayScreen.textContent += buttonValue;
                checkDisplayValue;
            }
            break;

        case 'operator':
            operator(e);
            storeFirstOperand = displayValue;
            break;

        case 'sum':
            storeSecondOperand = displayValue;
            displayScreen.textContent = operate(operatorValue, storeFirstOperand, storeSecondOperand);
            break;

        case 'del':
            const displayContainer = document.querySelector('.display-container');
            if (displayContainer.textContent !== 0) {
                const deleteNumber = displayValue.toString().slice(0, -1);
                displayScreen.textContent = parseInt(deleteNumber);
            } else {
                displayScreen.textContent = 0;
            }
            break;

        case 'clear':
            storeFirstOperand = 0;
            storeSecondOperand = 0;
            operatorValue = null;
            displayScreen.textContent = 0;
            break;
    }
};


// foreach buttons and addEventListener
buttons.forEach(button => button.addEventListener('click', displayResult));





