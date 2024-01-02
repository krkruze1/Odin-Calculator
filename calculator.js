//psuedo code
//Display
//Input
const inputs = document.querySelector('#inputs')
//Result
const mainScreen = document.querySelector('#result')

//Mathematical Operations
//Add
const addition = (a,b) => a + b;
//Substract
const subtraction = (a,b) => a - b;
//Multiply
const multiplication = (a,b) => a * b;
//Divide
const division = (a,b) => a / b;
//
//Operation
let input1 = 0;
let input2 = 0;
let operator = '';
let answer = 0;  
function operate(){
    if (operator === 'addition'){
        return addition(input1,input2)
    } else if(operator === 'subtraction') {
        return subtraction(input1,input2)
    } else if (operator === 'multiplication') {
        return multiplication(input1,input2)
    } else if (operator === 'division'){
        if (input2 === '0') {
            return "Uh-Oh!!! you've opened a black hole!";
        } else return division(input1,input2);
    };
};

//Number Buttons and decimal point
//on click add digit to main screen input

let numBtns = document.querySelectorAll('.number');

numBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (answer === 1) {
            mainScreen.textContent = '';
            answer = 0;}
        mainScreen.textContent += btn.id.slice(-1)
    });
});

let  decBtn = document.querySelector('.tool');

decBtn.addEventListener('click', () => {
    if (answer === 1) {
        mainScreen.textContent = '';
        answer = 0;}
    if (!mainScreen.textContent.includes('.')) {
        mainScreen.textContent += decBtn.id.slice(-1)
    };
});
//Mathematical Operation Buttons
//on click:
//1. let input 1 = main screen input 
//2. replace inputs screen with input 1 with operator 
//3. clear main screen input
//4. set operation

let opBtns = document.querySelectorAll('.operator');

opBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        inputs.textContent='';
        input1 = mainScreen.textContent;
        inputs.textContent += input1 + ' ' + btn.textContent + ' ';
        mainScreen.textContent= '';
        operator = btn.id;
    });
});

//Equals
//on click run operate
let eqBtn = document.querySelector('#equals');

eqBtn.addEventListener('click', () =>{
    if (operator === '') {
        inputs.textContent = '';
    };
    input2 = mainScreen.textContent;
    inputs.textContent += input2;
    mainScreen.textContent = operate();
    answer = 1;
    operator = '';
});

//System Operations
//All Clear
//on click
//1. let inputs=0
//2. let main screen input=0
//3. clear inputs screen
//4. clear main screen 

let acBtn = document.querySelector('#clearAll');

acBtn.addEventListener('click', () =>{
    mainScreen.textContent = '';
    inputs.textContent = '';
    input1 = 0;
    input2 = 0;
    answer = 0;
    operator = '';
});

//Clear Entry
//on click clear main screen 
let ceBtn = document.querySelector('#clearEntry');

ceBtn.addEventListener('click', () =>{
    mainScreen.textContent = '';
});

//Delete
//on click remove last digit from main screen

let delBtn = document.querySelector('#delete');

delBtn.addEventListener('click', () =>{
    mainScreen.textContent = mainScreen.textContent.slice(0,(mainScreen.textContent.length - 1));
});


//Switch Sign
// on click main screen input shanges from positive to negative and vice versa

let signBtn = document.querySelector('#switchSign')

signBtn.addEventListener('click', () =>{
    mainScreen.textContent = mainScreen.textContent * (-1);
});
