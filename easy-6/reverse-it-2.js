function reverseWords(str) {
  return str
    .split(' ')
    .map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    })
    .join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));