function average(arr) {
  const avg = arr.reduce((sum, currEl) => sum + currEl, 0) / arr.length;

  return Math.floor(avg);
}

// function average(arr) {
//   let sum = 0;

//   arr.forEach(num => {
//     sum += num;
//   })

//   return Math.floor(sum / arr.length)
// }

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));