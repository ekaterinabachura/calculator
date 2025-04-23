document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('result');
    let currentValue = '0';
    let previousValue = '';
    let operation = null;
    let isNewNumber = true;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    function handleClick(e) {
        const action = e.target.dataset.action;
        const number = e.target.dataset.number;

        if (number) handleNumber(number);
        if (action) handleAction(action);
        updateDisplay();
    }

    function handleNumber(num) {
        if (isNewNumber) {
            currentValue = num === '.' ? '0.' : num;
            isNewNumber = false;
        } else {
            if (num === '.' && currentValue.includes('.')) return;
            currentValue += num;
        }
        currentValue = currentValue.replace(/^0+(?!\.|$)/, '');
    }

    function handleAction(action) {
        switch(action) {
            case 'clear':
                currentValue = '0';
                previousValue = '';
                operation = null;
                isNewNumber = true;
                break;
            case 'sign':
                currentValue = String(-parseFloat(currentValue));
                break;
            case 'percent':
                currentValue = String(parseFloat(currentValue) / 100);
                break;
            case 'calculate':
                if (operation && previousValue !== '') {
                    currentValue = calculate(previousValue, currentValue, operation);
                    operation = null;
                    previousValue = '';
                    isNewNumber = true;
                }
                break;
            default:
                if (operation) return;
                previousValue = currentValue;
                operation = action;
                isNewNumber = true;
        }
    }

    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch(op) {
            case 'add': return a + b;
            case 'subtract': return a - b;
            case 'multiply': return a * b;
            case 'divide':
                if (b === 0) {
                    return 'Error';
                }
                return a / b;
            default: return b;
        }
    }

    function updateDisplay() {
        display.textContent = currentValue.length > 10 
        ? parseFloat(currentValue).toExponential(5) 
        : currentValue;
    }
})