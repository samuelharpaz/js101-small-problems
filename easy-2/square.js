const multiply = function (x, y) {
  return x * y;
};

const square = num => multiply(num, num);

console.log(square(5));

// further exploration
function power(num, exp) {
  if (exp === 0) return 1;

  let result = num;

  for (let i = 2; i <= exp; i++) {
    result = multiply(result, num);
  }

  return result;
}

console.log(power(5, 8));
