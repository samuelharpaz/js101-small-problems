const isPalindrome = function(str) {
  const reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
};

const isRealPalindrome = function(str) {
  const sanitizedStr = str.toLowerCase().split('').filter(char => 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(char)).join('');
  return isPalindrome(sanitizedStr);
};

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));