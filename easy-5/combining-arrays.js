function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function union(arr1, arr2) {
  const result = [...arr1];

  arr2.forEach(el => {
    if (!arr1.includes(el)) {
      result.push(el);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));