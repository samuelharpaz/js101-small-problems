function doubleConsonants(str) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

  return [...str].map(char => (CONSONANTS.includes(char.toLowerCase()) ? char + char : char)).join('');
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));