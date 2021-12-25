let numberButtons = document.querySelectorAll('.data-number')
let equalsButton = document.querySelector('.data-equals')
let deleteButton = document.querySelector('.data-delete')
let clearButton = document.querySelector('.data-clear')
let output = document.querySelector('.output')
let pointButton = document.querySelector('.data-point')
let plusButton = document.querySelector('.data-plus')
let minusButton = document.querySelector('.data-minus')
let multipliedButton = document.querySelector('.data-multiplied')
let dividedButton = document.querySelector('.data-divided')

let setPoint = false;
let op = "";
let num1, num2, result;


clearButton.addEventListener('click', (e) =>{
    output.textContent = "";
    setPoint = false; 
});

numberButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
        if(output.textContent == "0"){
            output.textContent = e.target.textContent;
        }
        else {
            output.textContent += e.target.textContent;
        }
    })
})

deleteButton.addEventListener('click', (e) =>{
    let len = output.textContent.length;
    let lastDigit = output.textContent.substr(len-1, len);
    if(lastDigit == "."){
        setPoint = false;
    }
    output.textContent = output.textContent.substr(0, len-1);
});

pointButton.addEventListener('click', (e) =>{
    if(setPoint == false){
        output.textContent += ".";
        setPoint = true;
    }   
});

plusButton.addEventListener('click', (e) =>{
    num1 = Number(output.textContent);
    output.textContent = "";
    op = "+";
});

minusButton.addEventListener('click', (e) =>{
    num1 = Number(output.textContent);
    output.textContent = "";
    op = "-";
});

multipliedButton.addEventListener('click', (e) =>{
    num1 = Number(output.textContent);
    output.textContent = "";
    op = "*";
});

dividedButton.addEventListener('click', (e) =>{
    num1 = Number(output.textContent);
    output.textContent = "";
    op = "÷";
});

equalsButton.addEventListener('click', (e) =>{
    num2 = Number(output.textContent);
    switch(op) {
        case '+':
            result = num1 + num2;
        break;    
        case '-':
            result = num1 - num2;
        break;      
        case '*':
            result = num1 * num2;
        break;  
        case '÷':
            result = num1 / num2;    
        break;
    }
    output.textContent = result;
});