const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const integerToString = num => {

  let str = '';

  while (num !== 0) {
    const lastDigit = num % 10;
    str = DIGITS[lastDigit] + str;

    num = (num - lastDigit) / 10;
  }

  return str ? str : '0';
};


console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));
