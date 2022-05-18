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

// Remainder Fn
const remainder = (a, b) => a % b;

// Global variables to store Numbers
let storeFirstOperand= 0;
let storeSecondOperand= 0;

// store Sum
let sumValue = 0;

// store Datatype variable
// let dataType = '';

// Call Operator Fns
let operatorValue = null;
const operator = (e) => operatorValue = e.target.value;

// Operate Fn 
// The Function take an Arithmetic Operator and call one of the above Functions
const operate = (operator, num1, num2) => {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);

    } else if (operator === '%') {
        return remainder(num1, num2);
    }
};

// resetCalculator Fn
const resetCalculator = () => {
    storeFirstOperand = 0;
    storeSecondOperand = 0;
    operatorValue = null;
    sumValue = 0;
    displayScreen.textContent = 0;
    document.querySelector('.decimal').disabled = false;
}

// displayValue Fn
const displayResult = (e) => {
    const value = {
        button: e.target.value,
        display: parseFloat(displayScreen.textContent),
        dataType: e.target.dataset.type
    };
    const buttonValue = e.target.value;
    const displayValue = parseFloat(displayScreen.textContent);
    const {currentKey} = displayScreen.dataset;
    const dataType = e.target.dataset.type;

    switch(dataType) {
        
        case 'number':
            if (currentKey === 'operator') {
                displayScreen.textContent = buttonValue;
            }
           else if (buttonValue === '.'){
                 document.querySelector('.decimal').disabled = true;
                 displayScreen.textContent += value.button;
            } else {
                const checkDisplayValue = (displayScreen.textContent === '0') ? displayScreen.textContent = value.button : displayScreen.textContent += value.button;
                checkDisplayValue;
            }
            displayScreen.dataset.currentKey = 'number';
            break;

        case 'operator':
            if (storeFirstOperand !== 0 && currentKey === 'number') {
                storeSecondOperand = displayValue;
                sumValue = operate(operatorValue, storeFirstOperand, storeSecondOperand);
                displayScreen.textContent = sumValue;
                operatorValue = buttonValue;
                storeFirstOperand = sumValue;
                storeSecondOperand = 0;
            } else {
                operator(e);
                storeFirstOperand = displayValue;
                document.querySelector('.decimal').disabled = false;
            }
            displayScreen.dataset.currentKey = 'operator';
            break;

        case 'sum':
            storeSecondOperand = displayValue;
            sumValue = operate(operatorValue, storeFirstOperand, storeSecondOperand);
            displayScreen.textContent = sumValue;
            storeFirstOperand = 0;
            break;

        case 'del':
            const displayContainer = document.querySelector('.display-container');
            if (displayContainer.textContent.length > 0) {
                const deleteNumber = displayValue.toString().slice(0, -1);
                displayScreen.textContent = deleteNumber;
            } else {
                resetCalculator();
            }
            break;

        case 'clear':
            resetCalculator();
            break;
    }
};


// foreach buttons and addEventListener
buttons.forEach(button => button.addEventListener('click', displayResult));
// buttons.forEach(button => button.addEventListener('keydown', (e) => console.log(e.target.value)));





