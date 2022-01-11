function sequence(num) {
  const arr = [];

  for (let count = 1; count <= num; count++) {
    arr.push(count);
  }

  return arr;
}

// function sequence(number) {
//   return [...Array(number).keys()].map(element => element + 1)
// }

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
