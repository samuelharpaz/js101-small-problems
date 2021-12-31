// input: two strings
// output: string
// concatenate the two strings: shorter one + longer + shorter again;

const shortLongShort = (str1, str2) => {
  const short = str1.length > str2.length ? str2 : str1;
  const long = short === str1 ? str2 : str1;

  return `${short}${long}${short}`;
};

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"