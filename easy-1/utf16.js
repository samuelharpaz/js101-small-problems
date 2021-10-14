function utf16Value(str) {
  let total = 0;

  for (let char of str) {
    total += char.charCodeAt();
  }

  return total;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
console.log(utf16Value('\u03A9'));
