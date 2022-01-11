function centerOf(str) {
  const isOddLength = str.length % 2 !== 0;
  const center = Math.ceil(str.length / 2) - 1;

  return isOddLength ? str[center] : str.slice(center, center + 2);
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));