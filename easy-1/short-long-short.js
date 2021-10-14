const shortLongShort = function (str1, str2) {
  const short = str1.length < str2.length ? str1 : str2;
  const long = str1.length > str2.length ? str1 : str2;

  return `${short}${long}${short}`;
};

console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz')); // "xyz"
