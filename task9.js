function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}


console.log(add(5, 3));        
console.log(subtract(5, 3));    
console.log(multiply(5, 3));     
console.log(divide(5, 3));       
console.log(modulus(5, 3));     
