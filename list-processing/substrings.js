function leadingSubstrings(str) {
  const strArr = [...str];

  return strArr.map((_, idx) => {
    return strArr.filter((_, i) => {
      return i <= idx;
    }).join('');
  });
}

// function substrings(str) {
//   const substrings = [];

//   for (let idx = 0; idx < str.length; idx++) {
//     substrings.push(...leadingSubstrings(str.slice(idx)))
//   }

//   return substrings;
// }

function substrings(str) {
  return str.split('').map((_, idx) => {
    return leadingSubstrings(str.slice(idx));
  }).flat();
}

console.log(substrings('abcde'));