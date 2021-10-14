const rl = require('readline-sync');

function isInvalidInteger(num) {
  return num <= 0 || !Number.isInteger(num);
}

let int = +rl.question('Please enter an integer greater than 0:\n');

while (isInvalidInteger(int)) {
  int = +rl.question('Must enter an integer greater than 0:\n');
}

let operation = rl.question(
  'Enter "s" to compute the sum, or "p" to compute the product:\n'
);

while (!['s', 'p'].includes(operation)) {
  operation = rl.question(
    'Must enter either "s" to compute the sum, or "p" to compute the product:\n'
  );
}

let result = 1;

for (let i = 2; i <= int; i++) {
  if (operation === 's') {
    result += i;
  } else if (operation === 'p') {
    result *= i;
  }
}

console.log(
  `The ${
    operation === 's' ? 'sum' : 'product'
  } of the integers between 1 and ${int} is ${result}.`
);
