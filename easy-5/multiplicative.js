const multiplicativeAverage = function(arr) {
  const product = arr.reduce((prod, currInt) => prod * currInt);

  return (product / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));