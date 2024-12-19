const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';

console.log('Addition:', add(10, 5));
console.log('Subtraction:', subtract(10, 5));
console.log('Multiplication:', multiply(10, 5));
console.log('Division:', divide(10, 5));
console.log('Division by zero:', divide(10, 0));
