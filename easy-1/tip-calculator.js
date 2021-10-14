const readline = require('readline-sync');

console.log('Welcome to the Tip Calculator!');
const bill = +readline.question('What is the bill?\n');
const tipPercent = +readline.question('What is the tip percentage?\n');

const tip = bill * (tipPercent / 100);
const total = bill + tip;

console.log('-------------------------');

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
