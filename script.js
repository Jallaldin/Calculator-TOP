const numbers = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const displayScreen = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const backspaceBtn = document.querySelector('.backspace');
const decimalBtn = document.querySelector('.decimal');

//variables for calculation
let num1, num2, operator;
let currentValue = false;

// basic operations functions
const add = function( a, b ) {
    return a + b;
};

const subtract = function ( a, b ) {
    return a  - b;
};

const multiply = function ( a, b){
    return a * b;
};

const divide = function ( a , b){
    return a / b;
};

// conditions for each operator
const operations = function ( operator, a, b) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return 'Error';
    };
};


const onNumbersClick = function () {
    numbers.forEach( number => {
        number.addEventListener('click', e => {
            if (currentValue) {
                displayScreen.textContent = '';
                currentValue = false;
            }
            const value1 = e.target.textContent;
            displayScreen.value += value1;
        });
    });
};

const onOperatorClick = function () {
    operators.forEach( operator => {
        operators.addEventListener('click', e => {
            num1 = displayScreen.value;
            operator = e.target.textContent;
        });
    });
};

const onDecimalClick = function () {
    decimalBtn.addEventListener('click', e => {
        if (!displayScreen.value.includes('.')) {
            displayScreen.value += '.';
        };
    });
};

const onEqualClick = function() {
    equalBtn.addEventListener('click', e=> {
        currentValue = true;
        num2 = displayScreen.value;
        displayScreen.value = operations(operator, num1, num2);
    });
};

const onClearClick = function() {
    clearBtn.addEventListener('click', e => {
        displayScreen.value = '0';
    });
};

const onBackSpaceClick = function() {
    backspaceBtn.addEventListener('click', e => {
        displayScreen.value = displayScreen.value.slice(0, -1);
    });
};



// const init = function() {
//     onNumbersClick();
//     onOperatorClick();
//     onEqualClick();
//     onClearClick();
//     onBackSpaceClick(); 
// }