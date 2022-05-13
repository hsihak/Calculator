// Add Fn
const add = (a, b) => a + b;

// Subtract Fn
const subtract = (a, b) => a - b;

// Multiply Fn
const multiply = (a, b) => a * b;

// Divide Fn
const divide = (a, b) => a / b;

// Operate Fn 
// The Function take an Arithmetic Operator and call one of the above Functions
const operate = (opeartor, num1, num2) => {
    if (opeartor === '+') {
        return add (num1, num2);
    }
    if (opeartor === '-') {
        return subtract (num1, num2);
    }
    if (opeartor === '*') {
        return multiply (num1, num2);
    }
    if (opeartor === '+') {
        return divide (num1, num2);
    }
};