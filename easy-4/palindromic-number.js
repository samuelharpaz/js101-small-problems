// function isPalindromicNumber(num) {
//   const numStr = String(num);

//   return numStr === numStr.split('').reverse().join('');
// }

function isPalindromicNumber(num) {
  let reversed = 0;
  let numCopy = num;
  let lastDigit;

  while (numCopy !== 0) {
    lastDigit = numCopy % 10;
    numCopy = (numCopy - lastDigit) / 10;
    reversed = (reversed * 10) + lastDigit;
  }

  console.log(num, reversed);
  return num === reversed;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(50));