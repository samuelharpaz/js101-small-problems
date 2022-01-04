function halvsies(arr) {
  const result = [[], []];
  const splitIdx = Math.ceil(arr.length / 2);

  for (let idx = 0; idx < arr.length; idx++) {
    const currNum = arr[idx];
    if (idx < splitIdx) {
      result[0].push(currNum);
    } else {
      result[1].push(currNum);
    }
  }

  return result;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));