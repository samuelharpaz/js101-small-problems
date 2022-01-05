const countOccurences = arr => {
  const counter = {};

  arr.forEach(el => {
    counter[el] = (counter[el] || 0) + 1;
  })

  for (let key in counter) {
    console.log(`${key} => ${counter[key]}`);
  }
};
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurences(vehicles);