const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(arr) {
  return [...arr].sort((a, b) => {
    if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
      return -1;
    } else if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
      return 1;
    } else {
      return 0;
    }
  });
}

// function alphabeticNumberSort(arr) {
//   return arr.map(num => NUMBER_WORDS[num]).sort().map(el => NUMBER_WORDS.indexOf(el));  
// }

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));