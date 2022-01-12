function sum(num) {
  return String(num)
    .split('')
    .map(char => +char)
    .reduce((total, currNum) => total + currNum, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));