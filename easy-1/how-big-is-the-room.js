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
const SQ_FEET_TO_SQ_METERS = 0.0929;

console.log('Enter the input type (meters or feet):');
let measurement = readline.prompt().toLowerCase();

while (measurement !== 'meters' && measurement !== 'feet') {
  console.log('Must enter "meters" or "feet"');
  measurement = readline.prompt().toLowerCase();
}

console.log(`Enter the length of the room in ${measurement}:`);
const length = +readline.prompt();

console.log(`Enter the width of the room in ${measurement}:`);
const width = +readline.prompt();

let areaMeters;
let areaFeet;

if (measurement === 'meters') {
  areaMeters = length * width;
  areaFeet = areaMeters * SQ_METERS_TO_SQ_FEET;
} else if (measurement === 'feet') {
  areaFeet = length * width;
  areaMeters = areaFeet * SQ_FEET_TO_SQ_METERS;
}

const result =
  measurement === 'meters'
    ? `${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(
        2
      )} square feet)`
    : `${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(
        2
      )} square meters)`;

console.log(`The area of the room is ${result}.`);
