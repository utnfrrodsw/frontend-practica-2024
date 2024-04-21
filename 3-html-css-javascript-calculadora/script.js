

window.addEventListener('load', () => {
    const resultInput = document.querySelector('#result');
    const additionBtn = document.querySelector('#addition');
    const substractionBtn = document.querySelector('#substraction');
    const divisionBtn = document.querySelector('#division');
    const multiplicationBtn = document.querySelector('#multiplication');
    const clearBtn = document.querySelector('#clear');
    const processBtn = document.querySelector('#process');

    clearBtn.addEventListener('click', () => {
        resultInput.value = '';
    })

    const addToResult = (value) => {
        resultInput.value += value;
    }

    const handleNumber = (number) => {
        addToResult(number);
    }

    const buttons = document.querySelectorAll('.numero');

    buttons.forEach(btn => btn.addEventListener('click', () => handleNumber(btn.textContent)));

    processBtn.addEventListener('click', () => {
        resultInput.value = eval(resultInput.value);
    });

    additionBtn.addEventListener('click', () => {
        addToResult('+');
    });
    
    substractionBtn.addEventListener('click', () => {
        addToResult('-');
    });

    multiplicationBtn.addEventListener('click', () => {
        addToResult('*');
    });

    divisionBtn.addEventListener('click', () => {
        addToResult('/');
    });
});
