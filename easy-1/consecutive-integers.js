const rl = require('readline-sync');

function addIntegers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

function multiplyIntegers(num) {
  let product = 1;

  for (let i = 2; i <= num; i++) {
    product *= i;
  }

  return product;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function validate(num) {
  return num.trim() !== '' && Number.isInteger(+num) && (+num > 0);
}

function welcome() {
  console.clear();
  prompt('Welcome to Consecutive Integers');
  prompt('Find the sum or product of all consecutive integers from 1 up to the number you choose.');
  console.log('----------------------------------------------------------------------------------------------------');
  prompt('Press enter to continue');
  rl.question();
}

function getNum() {
  prompt('Please enter an integer greater than 0:');
  let num = rl.question();

  while (!validate(num)) {
    prompt('Invalid input. Please enter an integer greater than 0.');
    num = rl.question();
  }

  return +num;
}

function getOperation() {
  prompt('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = rl.question().toLowerCase();

  while (!['s', 'sum', 'p', 'product'].includes(operation)) {
    prompt('Invalid response. Please enter "s" to compute the sum, or "p" to compute the product.');
    operation = rl.question().toLowerCase();
  }

  operation = ['s', 'sum'].includes(operation) ? 'sum' : 'product';

  return operation;
}

welcome();

while (true) {
  console.clear();

  const num = getNum();
  const operation = getOperation();

  let result = operation === 'sum' ? addIntegers(num) : multiplyIntegers(num);

  prompt(`The ${operation} of the integers between 1 and ${num} is ${result}.`);

  console.log('');
  prompt('Would you like to perform another operation? (y/n)');
  let response = rl.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(response)) {
    prompt('Please enter y for yes, or n for no');
    response = rl.question().toLowerCase();
  }

  response = ['y', 'yes'].includes(response) ? 'yes' : 'no';

  if (response === 'no') break;
}

prompt('Thank you for using Consecutive Integers!');