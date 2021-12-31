const isDoubleNum = function(num) {
  const numStr = String(num);

  if (numStr.length % 2 !== 0) return false;

  return numStr.slice(0, numStr.length / 2) === numStr.slice(numStr.length / 2);
};


const twice = function(num) {
  return isDoubleNum(num) ? num : num * 2;
};

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));