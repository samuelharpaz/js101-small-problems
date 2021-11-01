function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  const strArray = str.split('').map(char => DIGITS[char]);

  return strArray.reverse().reduce((acc, current, idx) =>
    acc + (current * (10 ** idx)), 0);
}

function hexadecimalToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  
  const strArray = str.split('').map(char => DIGITS[char.toLowerCase()]);
  return strArray.reverse().reduce((acc, current, idx) =>
    acc + (current * (16 ** idx)), 0);
}

console.log(stringToInteger('4872'));
console.log(hexadecimalToInteger('4d9F'));

