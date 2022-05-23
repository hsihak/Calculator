// Default Global Variables to store Calculator Values
let firstOperand = '';
let secondOperand = '';
let operator = '';

const currentDisplay = document.querySelector('.current-container');
const previousDisplay = document.querySelector('.pending-container');

// Number Buttons
const numBtns = document.querySelectorAll('.number');

const handleNumber = num => {
  // Only allow to input number less 12 numbers long
  if (currentDisplay.textContent.length < 12) {
    secondOperand += num;
    currentDisplay.textContent = secondOperand;
  }
};

numBtns.forEach(numBtn => numBtn.addEventListener('click', (e) => handleNumber(e.target.value)));


// Operator Buttons
const operatorBtns = document.querySelectorAll('.operator');

const checkOperator = checker => {
  operator = checker;
  previousDisplay.textContent = `${firstOperand} ${operator} `;
  secondOperand = '';
  currentDisplay.textContent = '';

};

const handleError = () => {
  firstOperand = 'Error';
  previousDisplay.textContent = '';
  currentDisplay.textContent = firstOperand;
  operator = '';
  return;
}

const handleOperator = oper => {
  if (firstOperand == '') {
      firstOperand = secondOperand;
      checkOperator(oper);
  } else if (secondOperand == '') {
      checkOperator(oper);
  } else {
      operate();
      operator = oper;
      currentDisplay.textContent = '0';
      previousDisplay.textContent = `${firstOperand} ${oper} `;
  }
  if (currentDisplay.textContent === '') {
    currentDisplay.textContent = 0;
  }
};

operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', (e) => handleOperator(e.target.value)));


// startNew Fn
const startNew = () => {
  previousDisplay.textContent = '';
  operator = '';
  secondOperand = '';
}

// Equal Button
const equalBtn = document.querySelector('.sum');

const operate = () => {
  // Convert Strings to Numbers
  firstOperand = parseFloat(firstOperand);
  secondOperand = parseFloat(secondOperand);
  //Calculate according to the assigned operator
  switch (operator){
    case '+':
      firstOperand += secondOperand;
      break;
      
    case '-':
      firstOperand -= secondOperand;
      break;
        
    case '*':
      firstOperand *= secondOperand;
      break;
          
    case '/':
      if (secondOperand <= 0) {   
        handleError();
        return;
      }
      firstOperand /= secondOperand;
      break;

    case '^':
      firstOperand = Math.pow(firstOperand, secondOperand);
      break;
    }
    previousDisplay.textContent = '';
    currentDisplay.textContent = firstOperand;
    startNew();
};

// Equal Listener
        
equalBtn.addEventListener('click', () => {
  return (secondOperand != '' && firstOperand != '') ? operate() : '';
});

// Clear Button
const clearBtn = document.querySelector('#clear');

// clearCalculator Fn
const clearCalculator = () => {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  previousDisplay.textContent = '';
  currentDisplay.textContent = '0';
};

// Clear Listener
clearBtn.addEventListener('click', clearCalculator);

// Delete Button
const deleteBtn = document.querySelector('#delete');

// Delete Listener
deleteBtn.addEventListener('click', () => {
  return currentDisplay.textContent = currentDisplay.textContent.substring(0, currentDisplay.textContent.length - 1);
});

// Decimal Button
const decimalBtn = document.querySelector('.decimal');

// decimal Fn
const checkDecimal = () => {
  if (secondOperand.includes('.') !== true) {
      secondOperand += '.';
      currentDisplay.textContent = secondOperand;
  }
};

// decimal Listener
decimalBtn.addEventListener('click', checkDecimal);