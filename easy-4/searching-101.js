const rl = require('readline-sync');

const ordinals = ['1st', '2nd', '3rd', '4th', '5th'];
const nums = [];

for (let count = 1; count <= 5; count++) {
  let num = rl.question(`Enter the ${ordinals[count - 1]} number: `);
  if (num === '') {
    num = '0';
  }
  nums.push(num);
}

const last = rl.question('Enter the last number: ');

console.log(`The number ${last} ${nums.includes(last) ? 'appears' : 'does not appear'} in ${nums.join()}.`);
