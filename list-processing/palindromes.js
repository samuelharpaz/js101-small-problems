function leadingSubstrings(str) {
  const strArr = [...str];

  return strArr.map((_, idx) => {
    return strArr.filter((_, i) => {
      return i <= idx;
    }).join('');
  });
}

function substrings(str) {
  return str.split('').map((_, idx) => {
    return leadingSubstrings(str.slice(idx));
  }).flat();
}

function palindromes(str) {
  return substrings(str).filter(word => {
    return word === word.split('').reverse().join('') &&
      word.length > 1;
  });
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));