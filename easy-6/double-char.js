const repeater = str => {
  return str.split('').map(char => char + char).join('');
};

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater('') === '');