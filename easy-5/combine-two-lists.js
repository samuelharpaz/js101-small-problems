// function interleave(arr1, arr2) {
//   const newArray = [];
  
//   for (let idx = 0; idx < arr1.length; idx++) {
//     newArray.push(arr1[idx]);
//     newArray.push(arr2[idx]);
//   }

//   return newArray;
// }

// function interleave(arr1, arr2) {
//   const newArray = [];

//   arr1.forEach((el, idx) => {
//     newArray.push(el, arr2[idx]);
//   });

//   return newArray;
// }

function interleave(arr1, arr2) {
  return arr1.reduce((acc, currEl, idx) => {
    acc.push(currEl, arr2[idx]);
    return acc;
  }, [])
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));