// function century(year) {
//   const centuryNum = Math.ceil(year / 100);
  

//   return `${centuryNum}${getCenturySuffix(centuryNum)}`;
// }

// function getCenturySuffix(centuryNum) {
//   const lastTwo = centuryNum % 100;
//   const lastDigit = centuryNum % 10;

//   if (catchWithTh(lastTwo)) {
//     return 'th';
//   }

//   switch (lastDigit) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   }
// }

// function catchWithTh(lastTwo) {
//   return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
// }

const suffixes = { 0: 'th', 
                   1: 'st',
                   2: 'nd',
                   3: 'rd',}


function beginning(year) {
  year = year / 100
  return Number.isInteger(year) ? year : Math.ceil(year);
}

function century(year) {
  let mainYear = String(beginning(year));

  if (mainYear.endsWith('13') || mainYear.endsWith('12') || mainYear.endsWith('11')) {
    mainYear += suffixes['0'];
  } else {
    let lastNum = mainYear.slice(-1);
    mainYear += suffixes[lastNum];
  }

  return mainYear;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
console.log(century(1695));