const functions = document.querySelectorAll('.buttons-func');
const numbers = document.querySelectorAll('.buttons-number');
const operand = document.querySelectorAll('.buttons-operand');
const display = document.querySelector('.display')

const n1 = '';
const n2 = '';
const operator = '';


function add(n1,n2) {
    return n1 + n2;
}
function substract(n1, n2) {
    return n1 - n2
}
function multiply(n1, n2) {
    return n1 * n2
}
function divide(n1, n2) {
    if(n2 == 0) {
        return "cant divide between 0"
    } else {
        return n1 / n2;
    }
}

function operate (n1, operator, n2) {
    switch(operator) {
        case "+": 
        return add(n1, n2);
        case '-':
        return substract(n1, n2);
        case '*':
        return multiply(n1, n2);
        case '/':
        return divide(n1, n2);
    }
}

functions.forEach(func => func.addEventListener('click', () => {
    console.log('function clicked');
}));

numbers.forEach(num => num.addEventListener('click', () => {
    console.log('number click');
}));

operand.forEach(op => op.addEventListener('click', () => {
    console.log('operand click');
}));