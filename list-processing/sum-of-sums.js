function sumOfSums(arr) {
  let result = 0;

  arr.reduce((acc, currNum) => {
    result += acc + currNum;
    return acc + currNum;
  }, 0);

  return result;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));