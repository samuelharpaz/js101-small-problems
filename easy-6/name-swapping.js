// const swapName = function(name) {
//   return [name.slice(0, name.lastIndexOf(' ')), name.slice(name.lastIndexOf(' ') + 1)].reverse().join(', ');
// };

const swapName = function(name) {
  const nameArr = name.split(' ');
  nameArr.unshift(nameArr.pop());
  const [last, ...rest] = nameArr;

  return `${last}, ${rest.join(' ')}`;
};

console.log(swapName('Sam Yekusiel Elisha Adams'));
console.log(swapName('Joe Roberts'));