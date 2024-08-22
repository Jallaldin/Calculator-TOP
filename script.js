let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

const add = function( a, b ) {
    return a + b;
}

const subtract = function ( a, b ) {
    return a  - b;
}


const multiply = function ( a, b){
    return a * b;
}

const divide = function ( a , b){
    return a / b;
}


const operate = function (num1, num2, operator){   
    switch(operator){
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
    }
}

function changeDisplay(value) {
    display.textContent = value;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let displayValue = button.textContent;
    })
    if(displayValue >= '0' && displayValue <= '9'){
        if(operator){
            num2 += displayValue;
            changeDisplay(num2);
        }
        else {
            num1 += displayValue;
            changeDisplay(num1);
        }
    }
})


