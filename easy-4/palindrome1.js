const isPalindrome = function(str) {
  const reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));