// Input: array of numbers
// Output: array of numbers
// Rules:
// - output array should contain same number of elements
// - each element value should be running total of original array

// Data structures:
// array

// Algorithm:
// 1. Create empty array 'results'
// 2. Loop over input array
//  a. push first element's value to 'results' array
//  b. for rest of elements, add current element's value to value of the preceding element in the 'results' array, and push the sum to 'results' array
// 3. Return 'results' array

function runningTotal(nums) {
  const results = [];

  for (let idx = 0; idx < nums.length; idx++) {
    const currNum = nums[idx];

    if (idx === 0) {
      results.push(currNum);
    } else {
      results.push(currNum + results[idx - 1]);
    }
  }

  return results;
}

// function runningTotal(nums) {
//   let total = 0;

//   return nums.map(num => {
//     // const result = num + total;
    
//     return total += num;
//   });
// }

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));