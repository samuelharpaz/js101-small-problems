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

function stringToSignedInteger(str) {
  if (str[0] === '+' || str[0] === '-') {
    str = str.slice(1);
  }

  if (str[0] === '-') {
    return -(stringToInteger(str));
  } else {
    return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
console.log(stringToSignedInteger("-17894")); // logs true