const rl = require('readline-sync');

let name = rl.question('What is your name? ');

if (name.trim().slice(-1) !== '!') {
  console.log(`Hello, ${name}.`);
} else {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
}
