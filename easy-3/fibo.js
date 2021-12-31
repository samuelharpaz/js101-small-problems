const findFibonacciIndexByLength = numDigits => {
  const fibonacciSeries = [1n, 1n];
  let index = 2n;

  while (true) {
    fibonacciSeries[index] = fibonacciSeries[index - 1n] + fibonacciSeries[index - 2n];

    if (String(fibonacciSeries[index]).length >= numDigits) {
      return index + 1n;
    }

    index += 1n;
  }
};

const idx = findFibonacciIndexByLength(1500n);
console.log(idx);