function penultimate(str) {
  const lastSpaceIdx = str.lastIndexOf(' ');

  return str.slice(str.lastIndexOf(' ', lastSpaceIdx - 1) + 1, lastSpaceIdx);
}

const penultimate2 = function (str) {
  if (str.trim() === '' || str.indexOf(' ') === -1) {
    return 'no penultimate';
  }

  const words = str.split(' ');
  return words[words.length - 2];
};

console.log(penultimate('last word') === 'last'); // logs true
console.log(penultimate('Launch School is great!') === 'is'); // logs true

console.log(penultimate2('last word') === 'last'); // logs true
console.log(penultimate2('Launch School is great!') === 'is'); // logs true

console.log(penultimate('harry potter'));
console.log(penultimate2('harry potter'));

console.log(penultimate2('     '));

// further exploration
function extractMiddle(str) {
  const words = str
    .trim()
    .split(' ')
    .filter(w => w !== ''); // remove array elements that are just extra spaces between words

  // if 2 words or fewer, or empty string
  if (words.length <= 2) {
    return 'must supply string of 3 words or more';
  }

  const middleIdx = Math.ceil(words.length / 2) - 1;

  // if even # of words, return array of two "middle" words
  if (words.length % 2 === 0) {
    return [words[middleIdx], words[middleIdx + 1]];
  } else {
    return words[middleIdx];
  }
}

console.log(extractMiddle('hello    there my best friend '));
console.log(extractMiddle(''));
console.log(extractMiddle('hello there you'));
console.log(extractMiddle('elephant in the room'));
console.log(extractMiddle('a b c     d e    f  g'));
