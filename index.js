const display = document.getElementById('screen')
let didCalculate = false;
let memory = '';

this.addEventListener('keypress', (event) => {
    console.log(event.key)
    if (event.key === "Escape"){
        clear();
    } else if (event.key === 'Enter') {
        console.log('Trigger calc')
        calculate();
    } else if (
        event.key === '1' ||
        event.key === '2' ||
        event.key === '3' ||
        event.key === '4' ||
        event.key === '5' ||
        event.key === '6' ||
        event.key === '7' ||
        event.key === '8' ||
        event.key === '9' ||
        event.key === '.' ||
        event.key === '+' ||
        event.key === '-' ||
        event.key === '*' ||
        event.key === 'x' ||
        event.key === '/'
    ){
        if (didCalculate){
            clear();
            didCalculate = false;
        }

        if (event.key === 'x') {
            display.innerHTML += '*'
        } else {
            display.innerHTML += event.key
        }
    }
})

const inputs = Array.from(document.getElementsByClassName('input-item'))
inputs.forEach(element => {
    element.addEventListener('click', (e) => {
        const input = e.target.innerHTML.toLowerCase();
        if (input === '='){
            return;
        } else if (input === 'ac'){
            allClear();
            return;
        } else if (input === 'c'){
            clear();
            return;
        }

        if (didCalculate){
            clear();
            didCalculate = false;
        }

        display.innerHTML += e.target.innerHTML
    })
});

function allClear() {
    didCalculate = false;
    memory = '';
    display.innerText = '';
    console.log('all clear')
}

function clear() {
    didCalculate = false;
    display.innerText = '';
    console.log('clear')
}

function calculate() {
    const preEval = display.innerText.toLowerCase().replace('x', '*');

    console.log('evaluating', preEval)
    memory = eval(memory + preEval);
    display.innerText = memory
    didCalculate = true;
}