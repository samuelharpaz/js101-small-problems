const crunch = function(str) {
  let removedDoubles = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) continue;
    removedDoubles += str[i];
  }

  return removedDoubles;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));