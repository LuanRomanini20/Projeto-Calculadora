let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(displayValue));
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function backDisplay() {
    displayValue = displayValue.slice(0, -1); // Remove o último caractere
    document.getElementById('display').value = displayValue;
}

function calculatePercentage() {
    try {
        const result = eval(displayValue) / 100; // Calcula a porcentagem
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}



