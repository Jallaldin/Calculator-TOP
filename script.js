const calculator = document.querySelector('.calc-container');
const numbers = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const displayScreen = document.querySelector(".display");
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const backspaceBtn = document.querySelector('.backspace');
const decimalBtn = document.querySelector('.decimal');
const swapsignsBtn = document.querySelector('.swap-signs');

//variables for calculation
let num1,num2, operator;
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
    if( b === 0) {
        return 'Error';
    }
    return a / b;
};

// conditions for each operator
const operations = function ( operator, a, b) {
    let c,d;
    c = a;
    d = b;
    switch (operator) {
        case '+':
            return add(c,d);
            break;
        case '-':
            return subtract(c, d);
            break;
        case 'x':
            return multiply(c, d);
            break;
        case '÷':
            return divide(c, d);
            break;
    }
}

const onNumbersClick = function () {
    numbers.forEach( number => {
        number.addEventListener('click', e => {
            console.log("Number clicked", e.target.textContent);
            if (currentValue) {
                displayScreen.textContent = '';
                currentValue = false;
            }
            if (displayScreen.textContent === '0') {
                displayScreen.textContent = '';
            }
            const value1 = e.target.textContent;
            displayScreen.textContent += value1;
        });
    });
};

const onOperatorClick = function () {
    operators.forEach( op => {
        op.addEventListener('click', e => {
            console.log("Operator clicked");
            num1 = displayScreen.textContent;
            operator = e.target.textContent;
            console.log("Operator set to:", operator)
            displayScreen.textContent = '';
        });
    });
};

const onEqualClick = function() {
    equalBtn.addEventListener('click', e => {
        currentValue = true;
        num2 = e.target.textContent;
        num2 = displayScreen.textContent;
        console.log("Num1: ", num1, " Num2: ", num2, " Operator: ", operator, "CurrentValue:", currentValue);
        displayScreen.textContent = operations(operator, num1, num2);
        operator = null;
    });
};

const onDecimalClick = function () {
    decimalBtn.addEventListener('click', e => {
        if (!displayScreen.textContent.includes('.')) {
            displayScreen.textContent += '.';
        };
    });
};



const onClearClick = function() {
    clearBtn.addEventListener('click', e => {
        displayScreen.textContent = '0';
    });
};

const onBackSpaceClick = function() {
    backspaceBtn.addEventListener('click', e => {
        displayScreen.textContent = displayScreen.textContent.slice(0, -1);
    if (displayScreen.textContent === '') {
        displayScreen.textContent = '0';
    }
    });
};

const onswapSignsClick = function() {
    swapsignsBtn.addEventListener('click', e => {
        displayScreen.textContent = -displayScreen.textContent;
    });
};

onNumbersClick();
onOperatorClick();
onDecimalClick();
onEqualClick();
onClearClick();
onBackSpaceClick();
onswapSignsClick();