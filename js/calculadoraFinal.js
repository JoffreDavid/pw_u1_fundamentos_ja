let display = document.getElementById('display');
let num1 = null, operador = null;

function mostrarDisplay(valor) {
    if (!isNaN(valor) || valor === '.') {
        display.innerText += valor;
    }

    else if (['+', '-', '*', '/'].includes(valor)) {
        if (display.innerText === '' && valor === '-') {
            display.innerText = '-';
            return;
        }

        if (num1 === null) {
            num1 = parseFloat(display.innerText);
        } else if (operador) {
            let num2 = parseFloat(display.innerText);
            num1 = calcular(num1, num2, operador);
            display.innerText = num1;
        }

        operador = valor;
        display.innerText += valor; 
    }

    else if (valor === '%') {
    if (num1 !== null && operador) {
        let partes = display.innerText.split(/[\+\-\*\/]/);
        let num2 = parseFloat(partes.pop());
        let resultado = calcular(num1, num2, '%');
        display.innerText = resultado;
        num1 = resultado;
        operador = null;
    }
}

    else if (valor === '=') {
        if (operador !== null) {
            let partes = display.innerText.split(/[\+\-\*\/]/);
            let num2 = parseFloat(partes.pop());
            let resultado = calcular(num1, num2, operador);
            display.innerText = resultado;
            num1 = resultado;
            operador = null;
        }
    }

    else if (valor === 'C') {
        display.innerText = '';
        num1 = null;
        operador = null;
    }

    else if (valor === '←') {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calcular(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Error";
        case '%': return (a * b) / 100;
        default: return b;
    }
}
