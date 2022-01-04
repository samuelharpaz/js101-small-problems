function wordSizes(str) {
  const cleanedStr = str
    .split('')
    .filter(char => {
      return 'abcdefghijklmnopqrstuvwxyz '.includes(char.toLowerCase());
    })
    .join('');

  console.log(cleanedStr);
  
  const words = cleanedStr.split(' ');
  const letterCount = {};

  for (let word of words) {
    if (word.length === 0) continue;
    letterCount[word.length] = (letterCount[word.length] || 0) + 1;
  }

  return letterCount;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));