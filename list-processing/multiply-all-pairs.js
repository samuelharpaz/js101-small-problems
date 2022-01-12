const multiplyAllPairs = (arr1, arr2) => {
  const results = [];

  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      results.push(el2 * el1);
    });
  });

  return results.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));