//psuedo code
//Construction
//
//Number Buttons
//
//Mathematical Operation Buttons
//
//System Buttons
//
//Display
//Input
//
//Result
//
//
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
let result = 0;
function operate(operator){
return operator(input1,input2);
}

//
//System Operations
//Clear
//Delete
//Equals