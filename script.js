// QuerySelector

const inputNine = document.querySelector("#nine");
const inputEight = document.querySelector("#eight");
const inputSeven = document.querySelector("#seven");
const inputSix = document.querySelector("#six");
const inputFive = document.querySelector("#five");
const inputFour = document.querySelector("#four");
const inputThree = document.querySelector("#three");
const inputTwo = document.querySelector("#two");
const inputOne = document.querySelector("#one");
const inputZero = document.querySelector("#zero");
const inputSuppr = document.querySelector("#suppr");
const inputReset = document.querySelector("#reset");
const inputSum = document.querySelector("#sum");
const inputReduce = document.querySelector("#reduce");
const inputMultiply = document.querySelector("#multiply");
const inputDivide = document.querySelector("#divide");
const inputComma = document.querySelector("#comma");
const inputEqual = document.querySelector("#equal");
const inputLeftParenthese = document.querySelector("#left-parenthese");
const inputRightParenthese = document.querySelector("#right-parenthese");
const displayEquation = document.querySelector(".display-equation");
const displayResultContainer = document.querySelector(".display-result");

// Variables

let displayArray = [];

// Functions

const pushIntoArray = function(input) {
    displayArray.push(input);
    displayEquation.innerText = displayArray.join("");
}

const supprFromArray = function() {
    if (displayArray.length > 0) {
        displayArray.pop();
    };
    displayEquation.innerText = displayArray.join("");
}

const displayResult = function() {
    const result = eval(displayArray.join("").replace("×", "*").replace("÷", "/")).toString();
    displayResultContainer.innerText = result;
    displayArray = result.split("");    
}
// EventListener

inputNine.addEventListener("click", () => pushIntoArray(9) );
inputEight.addEventListener("click", () => pushIntoArray(8) );  
inputSeven.addEventListener("click", () => pushIntoArray(7) ); 
inputSix.addEventListener("click", () => pushIntoArray(6) ); 
inputFive.addEventListener("click", () => pushIntoArray(5) );  
inputFour.addEventListener("click", () => pushIntoArray(4) ); 
inputThree.addEventListener("click", () => pushIntoArray(3) );  
inputTwo.addEventListener("click", () => pushIntoArray(2) );  
inputOne.addEventListener("click", () => pushIntoArray(1) );  
inputZero.addEventListener("click", () => pushIntoArray(0) );  
inputSum.addEventListener("click", () => pushIntoArray("+") );  
inputReduce.addEventListener("click", () => pushIntoArray("-") );  
inputMultiply.addEventListener("click", () => pushIntoArray("×") );  
inputDivide.addEventListener("click", () => pushIntoArray("÷") );  
inputComma.addEventListener("click", () => pushIntoArray(".") );
inputLeftParenthese.addEventListener("click", () => pushIntoArray("(") );
inputRightParenthese.addEventListener("click", () => pushIntoArray(")") );
inputEqual.addEventListener("click", () =>  displayResult(displayArray));
inputSuppr.addEventListener("click", () => supprFromArray() );  
inputReset.addEventListener("click", () => location.reload() ); 


