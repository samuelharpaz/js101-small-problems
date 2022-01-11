// [1, 2, 3, 4]


function reverse(arr) {
  for (let count = 1; count < arr.length; count++) {
    arr.splice(arr.length - count, 0, arr.shift());
  }

  return arr;
}

function reverse2(arr) {
  for (let count = 1; count < arr.length; count++) {
    arr.splice(count - 1, 0, arr.pop());
  }

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse2(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

