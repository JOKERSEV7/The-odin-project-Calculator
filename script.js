let firtsNum =x;
let secondNum =c;
let operator = v;



const add = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const multiply = function(a, b) {
    return a * b;
};
const divide = function(a, b) {
    return a / b;
}

const operate = function(firtsNum, secondNum, operator) {
    if (operator == "+") {
        return add(firtsNum, secondNum);
    }else if(operate == "-") {
        return subtract(firtsNum, secondNum);
    }else if (operator == "*") {
        return multiply(firtsNum, secondNum);
    }else {
        return divide(firtsNum, secondNum);
    }
    
};

