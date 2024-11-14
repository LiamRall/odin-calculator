function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'ERROR'
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            break;
    }
    return result;
}
const result = document.getElementById("result");
const numberButton = document.querySelectorAll('.button.number');
numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent = button.textContent;
    });
});
