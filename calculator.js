//psuedo code
//Display
//Input
const inputs = document.querySelector('#inputs')
//Result
const mainScreen = document.querySelector('#mainscreen')

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
//Variable list
let input1 = 0;
let input2 = 0;
let operator = '';
let opSign='';
let answer = 0;

//Function list

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

function clearAll(){
    mainScreen.textContent = '';
    inputs.textContent = '';
    input1 = 0;
    input2 = 0;
    answer = 0;  //is there an answer on MainScreen 
    operator = '';
    opSign = '';
};

//Number Buttons and decimal point
//on click add digit to main screen input

let numBtns = document.querySelectorAll('.number');

numBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (answer === 1) {
            clearAll();
        };
        if (mainScreen.textContent.length < 10) {
            mainScreen.textContent += btn.id.slice(-1);
        } else { 
            mainScreen.textContent = Number(mainScreen.textContent).toPrecision(10);
        }

    });
});

let  decBtn = document.querySelector('.tool');

decBtn.addEventListener('click', () => {
    if (answer === 1) {
        clearAll();
    };
    if (!mainScreen.textContent.includes('.')) {
        mainScreen.textContent += decBtn.id.slice(-1)
    };
});
//Mathematical Operation Buttons

let opBtns = document.querySelectorAll('.operator');

opBtns.forEach((btn) => {
    btn.addEventListener('click', () => {        
        if (mainScreen.textContent === '' && operator !== '') {//purpose: changes operator
            operator = btn.id;
            opSign = btn.textContent;
            inputs.textContent = input1 + ' ' + opSign;        
        } else if (operator === ''){// first time operation
            inputs.textContent='';
            input1 = Number(mainScreen.textContent);
            opSign = btn.textContent;
            inputs.textContent += input1 + ' ' + opSign;
            mainScreen.textContent = '';
            input2 = '';
            operator = btn.id;
    }   else if (answer === 1){//chain operation after equals
            input1 = Number(mainScreen.textContent);
            inputs.textContent = input1 + ' ' + opSign;
            opSign = btn.textContent;
            operator = btn.id;
            mainScreen.textContent = '';
            answer = 0
    }   else {//chain operations without equals
            input2 = Number(mainScreen.textContent);
            input1 = operate();
            opSign = btn.textContent;
            inputs.textContent = input1 + ' ' + opSign;
            mainScreen.textContent = '';
            answer = 0;    
            operator = btn.id;
    };
        if (mainScreen.textContent.length >= 8) {
        mainScreen.textContent = Number(mainScreen.textContent).toPrecision(7)
    };
});
});

//Equals
//on click run operate depending on conditions
let eqBtn = document.querySelector('#equals');

eqBtn.addEventListener('click', () =>{
    if (operator === '') {//no operation selected
        inputs.textContent = mainScreen.textContent;
        answer = 1;
    } else if (answer === 1) {//purpose: reuses operator and last input
        input1 = Number(mainScreen.textContent);
        inputs.textContent = input1 + '' + opSign + '' + input2;
        mainScreen.textContent = operate();
    } else {//runs operation on given inputs and operator
        input2 = Number(mainScreen.textContent);
        inputs.textContent += ' ' + input2;
        mainScreen.textContent = operate();
        answer = 1;
    };
    if (mainScreen.textContent.length >= 8) {
        mainScreen.textContent = Number(mainScreen.textContent).toPrecision(7)
    };
});

//System Operations
//All Clear
//on click
//1. let inputs=0
//2. let main screen input=0
//3. clear inputs screen
//4. clear main screen 

let acBtn = document.querySelector('#clearAll');

acBtn.addEventListener('click', clearAll);

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
