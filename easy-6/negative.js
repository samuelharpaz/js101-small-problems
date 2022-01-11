function negative(num) {
  return -Math.abs(num);
}

// function negative(num) {
//   const sign = Math.sign(num);

//   return sign >= 0 ? -num : num;
// }

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));