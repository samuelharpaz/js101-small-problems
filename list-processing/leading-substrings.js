// function leadingSubstrings(str) {
//   const substrings = [];

//   for (let idx = 1; idx <= str.length; idx++) {
//     substrings.push(str.slice(0, idx));
//   }

//   return substrings;
// }

function leadingSubstrings(str) {
  const strArr = [...str];

  return strArr.map((_, idx) => {
    return strArr.filter((_, i) => {
      return i <= idx;
    }).join('');
  });
}

console.log(leadingSubstrings('abcde'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));