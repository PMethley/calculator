function add(firstVal, secondVal){
    return(firstVal + secondVal);
};

function subtract(firstVal, secondVal){
    return(firstVal - secondVal);
};

function multiply(firstVal, secondVal){
    return(firstVal * secondVal);
};

function divide(firstVal, secondVal){
    return(firstVal / secondVal);
};

let firstNum = 0;
let operator = "";
let secondNum = 0;

function operate(firstNum, operator, secondNum){
    switch (operator) {
        case "+":
            return(add(firstNum, secondNum));
        case "-":
            return(subtract(firstNum,secondNum));
        case "*":
            return(multiply(firstNum, secondNum));
        case "/":
            return(divide(firstNum, secondNum));
        default:
            console.log("No operator selected");
            break;
    };
};