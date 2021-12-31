// Input: positive integer
// Output: string
// Rules:
//  - string must consist of alternating '1's and '0's
//  - string should start with a '1'
//  - length of string is equal to the input integer

// Examples/Test Cases
/*
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/

// Data Structures
// String

// Algorithm
// 1. Create a 'result' variable and initialize it to an empty string
// 2. Create an 'index' variable (value 0) for the index of the result string
// 3. Start loop that iterates over the 'index' variable from 0 until 'length' (input integer) - 1
//  a. add a '1' or '0' to the 'result' string depending on whether index is even ('1') or odd ('0')
//  b. increment index by 1
// 4. End the loop
// 5. Return the 'result' string

const stringy = size => {
  let result = '';

  for (let index = 0; index < size; index ++) {
    result += index % 2 === 0 ? '1' : '0'
  }

  return result;
};



console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));