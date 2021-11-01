const oddities = arr => {
  return arr.filter((_, idx) => idx % 2 === 0);
};

const oddities2 = arr => {
  const result = [];

  for (let idx = 0; idx < arr.length; idx += 2) {
    result.push(arr[idx]);
  }

  return result;
};

const oddities3 = arr => {
  return arr.reduce((acc, current, idx) => {
    if (idx % 2 === 0) {
      acc.push(current);
    }
    return acc;
  }, []);
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

const getEvens = arr => {
  const result = [];
  let toBePushed = false;

  for (let idx = 0; idx < arr.length; idx++) {
    if (toBePushed) {
      result.push(arr[idx]);
    }
    toBePushed = !toBePushed;
  }

  return result;
};

console.log(getEvens([2, 3, 4, 5, 6]));
console.log(getEvens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(getEvens(["abc", "def"])); // logs ['abc']
console.log(getEvens([123])); // logs [123]
console.log(getEvens([])); // logs []