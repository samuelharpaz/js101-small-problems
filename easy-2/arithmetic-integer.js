const rl = require('readline-sync');

const prompt = input => `=> ${input}`;

const num1 = +rl.question(prompt('Enter the first number:\n'));
const num2 = +rl.question(prompt('Enter the second number:\n'));

console.log(prompt(`${num1} + ${num2} = ${num1 + num2}`));
console.log(prompt(`${num1} - ${num2} = ${num1 - num2}`));
console.log(prompt(`${num1} * ${num2} = ${num1 * num2}`));
console.log(prompt(`${num1} / ${num2} = ${num1 / num2}`));
console.log(prompt(`${num1} % ${num2} = ${num1 % num2}`));
console.log(prompt(`${num1} ** ${num2} = ${num1 ** num2}`));
