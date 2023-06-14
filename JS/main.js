const displayElement = document.getElementById("screen");
const numberButtonsArray = document.querySelectorAll(".button.number");
const operatorButtonsArray = document.querySelectorAll(".button.operator");
let displayNumber = "0";
let valueOne = "";
let valueTwo = "";
let currentOperator = "";
let currentOperatorElement = "";

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

function operate(firstNum, operator, secondNum){
    switch (operator) {
        case "+":
            return(add(firstNum, secondNum));
        case "-":
            return(subtract(firstNum,secondNum));
        case "×":
            return(multiply(firstNum, secondNum));
        case "÷":
            return(divide(firstNum, secondNum));
        default:
            console.log("No operator selected");
            break;
    };
};

function unselectOperator(){
    if (currentOperatorElement != ""){
        currentOperatorElement.classList.remove("selected-operator")
    };
};

numberButtonsArray.forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => {
        unselectOperator();
        if(displayNumber.length > 8){
            return;
        };
        if(displayElement.innerText === "0" || displayNumber === ""){
            displayElement.innerText = buttonElement.innerText;
            displayNumber = buttonElement.innerText;
        }else{
            displayElement.innerText = displayElement.innerText + buttonElement.innerText;
            displayNumber = displayNumber + buttonElement.innerText;
        };
    });
});

document.getElementById("clear").addEventListener("click", () => {
    displayElement.innerText = "0";
    displayNumber = currentOperator = valueOne = valueTwo = "";
    unselectOperator();
});

operatorButtonsArray.forEach((buttonElement) => {
    buttonElement.addEventListener("click", () =>{
        buttonElement.classList.add("selected-operator")
        if(valueOne != "" && displayNumber != ""){
            valueOne = displayElement.innerText = operate(Number(valueOne), currentOperator, Number(displayNumber));
            displayNumber = "";
            currentOperator = "";

        }else{
            valueOne = displayNumber;
            displayNumber = "";
        }
        currentOperatorElement = buttonElement
        currentOperator = buttonElement.innerText;
    });
});

document.getElementById("equals").addEventListener("click", () => {
    unselectOperator();
    if(valueOne === ""){
        console.log("if")
        displayElement.innerText, displayNumber = "0";
    }else if(valueOne != "" && currentOperator === ""){
        console.log("else if 1")
        displayElement.innerText, displayNumber = valueOne;
    }else if(valueOne != "" && currentOperator != "" && displayNumber === ""){
        console.log("else if 2")
        displayElement.innerText = displayNumber = operate(Number(valueOne), currentOperator, Number(valueOne));
    }else{
        console.log("else")
        valueTwo = displayNumber;
        displayElement.innerText = displayNumber = operate(Number(valueOne), currentOperator, Number(valueTwo));
    };
    displayNumber = valueOne = valueTwo = currentOperator = "";
});