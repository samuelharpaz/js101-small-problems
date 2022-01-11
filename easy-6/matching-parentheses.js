function isBalanced(str) {
  const matchingPairs = {'()': 0, '[]': 0, '{}': 0};
  const quotes = {"'": 0, '"': 0};

  for (let idx = 0; idx < str.length; idx++) {
    if (Object.keys(quotes).includes(str[idx])) {
      quotes[str[idx]] += 1;
    }

    for (let key in matchingPairs) {
      if (str[idx] === key[0]) {
        matchingPairs[key] += 1;
      } else if (str[idx] === key[1]) {
        matchingPairs[key] -= 1;
      }

      if (matchingPairs[key] < 0) return false;
    }
  }

  const pairsMatch = Object.values(matchingPairs).every(val => val === 0);
  const quotesEven = Object.values(quotes).every(val => val % 2 === 0);

  return pairsMatch && quotesEven;
}

console.log(isBalanced("What [is] this?") === true);
console.log(isBalanced(`What 'is""' this?`));
console.log(isBalanced("What {is this?") === false);
console.log(isBalanced("({What} [is this])?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("What()''''' [[[]]u]{}p'") === true);