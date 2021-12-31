const readline = require('readline-sync');

readline.setDefaultOptions({ prompt: '=> ' });

// const SQ_METERS_TO_SQ_FEET = 10.7639;

// console.log('Enter the length of the room in meters:');
// const length = +readline.prompt();

// console.log('Enter the width of the room in meters:');
// const width = +readline.prompt();

// const areaSqMeters = length * width;
// const areaSqFeet = areaSqMeters * SQ_METERS_TO_SQ_FEET;

// console.log(
//   `The area of the room is ${areaSqMeters.toFixed(
//     2
//   )} square meters (${areaSqFeet.toFixed(2)} square feet).`
// );

// Bonus
const SQ_METERS_TO_SQ_FEET = 10.7639;

console.clear();

console.log('Enter the input type: meters or feet\n(Enter m for meters or f for feet)');
let measurement = readline.prompt().toLowerCase();

while (!['m', 'meters', 'f', 'feet'].includes(measurement)) {
  console.log('Invalid input. Please enter m for meters or f for feet');
  measurement = readline.prompt().toLowerCase();
}

console.log(`Enter the length of the room in ${measurement}:`);
const length = +readline.prompt();

console.log(`Enter the width of the room in ${measurement}:`);
const width = +readline.prompt();

let areaMeters;
let areaFeet;
let result;

if (['m', 'meters'].includes(measurement)) {
  areaMeters = length * width;
  areaFeet = areaMeters * SQ_METERS_TO_SQ_FEET;
  result = `${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet)`
} else {
  areaFeet = length * width;
  areaMeters = areaFeet / SQ_METERS_TO_SQ_FEET;
  result = `${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(2)} square meters)`;
}

console.log(`The area of the room is ${result}.`);
