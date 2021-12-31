// Input: positive integer
// Output: console.log series of strings

function triangle(num) {
  for (let counter = 1; counter <= num; counter++) {
    let str = '*'.repeat(counter);
    console.log(str.padStart(num, ' '));
  }
}

triangle(14);