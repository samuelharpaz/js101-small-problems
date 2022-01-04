const rl = require('readline-sync');

const age = +rl.question('What is your age?\n');
const retireAge = +rl.question('At what age would you like to retire?\n');

const currentYear = new Date().getFullYear();
const yearsToRetirement = retireAge - age;
const retireYear = currentYear + yearsToRetirement;

console.log(`It's ${new Date().getFullYear()}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);