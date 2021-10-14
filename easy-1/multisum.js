const multisum = num => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

const multisum2 = target => {
  const arr = [3, 5];
  const multiples = [];

  arr.forEach(n => {
    for (let i = n; i <= target; i += n) {
      multiples.push(i);
    }
  });

  const multiplesUnique = [...new Set(multiples)];

  return multiplesUnique.reduce((acc, curr) => acc + curr, 0);
};

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));

console.log(multisum2(3));
console.log(multisum2(5));
console.log(multisum2(10));
console.log(multisum2(1000));
