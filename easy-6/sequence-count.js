function sequence(count, start) {
  const result = [];

  for (let multiplier = 1; multiplier <= count; multiplier++) {
    result.push(start * multiplier);
  }

  return result;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));