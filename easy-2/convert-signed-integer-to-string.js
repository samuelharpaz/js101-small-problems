const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const integerToString = num => {

  let str = '';

  while (num !== 0) {
    const lastDigit = num % 10;
    str = DIGITS[lastDigit] + str;

    num = Math.trunc(num / 10);
  }

  return str ? str : '0';
};

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {
    return '-' + integerToString(-num);
  } else if (Math.sign(num) === 1) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }

}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
console.log(signedIntegerToString(-0));
console.log(signedIntegerToString(-52));