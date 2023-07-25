// static/js/calculator.js
let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function calculate() {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch (error) {
        display.value = 'Erro';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

// Restante do código do calculator.js ...

function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

// Restante do código do calculator.js ...
