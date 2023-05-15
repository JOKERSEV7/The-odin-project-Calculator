let firtsNum = null;
let operator = null;

const calculatorDisplay = document.getElementById("calculator-display");
const digitsBtn = document.querySelectorAll(".digit-btn");
const clearBtn = document.querySelector(".clear-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equal-btn");
const backSpaceBtn = document.querySelector(".back-btn")


const decimalBtn = document.querySelector(".decimal-btn");

decimalBtn.addEventListener("click", () => {
    decimalBtn.disabled = true;
})

let displayValue = '';

digitsBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        displayValue += btn.value;
        calculatorDisplay.value = displayValue;
    });
});

clearBtn.addEventListener("click", () => {
    displayValue = '';
    calculatorDisplay.value = '';
    decimalBtn.disabled = false;
});

operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (operator !== null) {
            let secondNum = Number(displayValue);
            firtsNum = operate(firtsNum, secondNum, operator);
            displayValue = '';
            calculatorDisplay.value = firtsNum;
        }

        operator = btn. value;

        if (firtsNum === null) {
            firtsNum = Number(displayValue);
            displayValue = '';
        }
        decimalBtn.disabled = false;
    });

});
    

equalBtn.addEventListener("click", () => {
   if (operator !== null) {
    let secondNum = Number(displayValue);
    let result = operate(firtsNum, secondNum, operator);
   
  

    calculatorDisplay.value = result;
    displayValue = '';
    firtsNum = null;
    operator= null;
   }
   decimalBtn.disabled = false;
});

backSpaceBtn.addEventListener("click", () => {
    backSpace();
})




const add = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
      return (a - b); 
};
const multiply = function(a, b) {
    return a * b;
};
const divide = function(a, b) {
    if (b == 0 || b == '0') {
        return ("Error");
    } else {
        return (a / b);
    }
}

const operate = function(firtsNum, secondNum, operator) {
    let result;
    if (operator =="+") {
        result = add(firtsNum, secondNum);
    }else if(operator == "-") {
        result = subtract(firtsNum, secondNum);
    }else if (operator == "*") {
        result = multiply(firtsNum, secondNum);
    }else if (operator == "/"){
        result = divide(firtsNum, secondNum);
    };
    return Math.round(result);
    
};

function backSpace() {
    calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
    displayValue = calculatorDisplay.value;
}

