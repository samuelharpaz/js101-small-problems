// Input: integer that represents a year greater than 0
// Output: Boolean (is leap year or not)
// Rules:
// - if year divisible by 4, is leap year, unless:
//  - it is also divisible by 100, unless:
//    - it is also divisible by 400
// - can assume input year will be greater than 0

// Data Structures
// none - just return booleans

// Algorithm
// 1. Determine if year is divisible by 400
//  - if yes, return true
//  - if not:
// 2. Determine if year is divisible by 100
//  - if yes, return false
//  - if not:
// 3. Determine if year is divisible by 4
//  - if yes, return true
//  - if not:
// 4. Return false

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}



// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 !== 0) {
//       return true;
//     } else {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// }

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400))