const readline = require('readline-sync');

// #1
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// #2
// for (let i = 1; i <= 99; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// #3 user-specified limit
// console.log('Welcome to Odd Number Logger!');
// let max = readline.question('What is the max number?\n');

// while (max <= 0) {
//   console.log('Maximum number must be greater or equal to 1');
//   max = readline.question('What is the max number?\n');
// }

// for (let i = 1; i <= max; i += 2) {
//   console.log(i);
// }
