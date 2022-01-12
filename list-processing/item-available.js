function transactionsFor(itemId, transactions) {
  return transactions.filter(t => t.id === itemId);
}

function isItemAvailable(itemId, transactions) {
  const quantity = transactionsFor(itemId, transactions).reduce((acc, t) => {
    const qty = t.quantity;
    return t.movement === 'in' ? acc + qty : acc - qty;
}, 0);

  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity: 5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true