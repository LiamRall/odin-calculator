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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
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

function updateScreen(value){
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = value;
}

let num1 = ""
let num2 = ""
let operator = "";
let screenValue = "";


const numberButton = document.querySelectorAll('.number');
numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        const inputValue = button.textContent;
        if (num1 === "") {
            num1 = inputValue;
            screenValue = inputValue;
            updateScreen(screenValue);
        } else if(num2 === "" && operator === "") {
            num1 += inputValue;
            screenValue += inputValue;
            updateScreen(screenValue);
        } else if(num2 === ""){
            num2 = inputValue;
            screenValue = inputValue;
            updateScreen(screenValue);
        }
        else {
            num2 += inputValue;
            screenValue += inputValue;
            updateScreen(screenValue);
        }
    });
});


const operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        const currentOperator = button.textContent;
        switch (currentOperator) {
            case '=':
                screenValue = operate(num1, num2, operator);
                updateScreen(screenValue);
                num1 = screenValue;
                num2 = "";
                operator = "";
                break;
            default:
                if (operator === ""){
                    operator = currentOperator;
                } else if(operator !== ""){
                    screenValue = operate(num1, num2, operator);
                    updateScreen(screenValue);
                    num1 = screenValue;
                    num2 = "";
                    operator = currentOperator;
                }
                break;
        }
    });
});

