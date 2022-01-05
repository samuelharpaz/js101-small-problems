// Input: number - positive integer
// Output: array

function digitList(num) {
  const numStr = String(num);

  const numStrArr = numStr.split('');
  return numStrArr.map(numStr => +numStr);
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));