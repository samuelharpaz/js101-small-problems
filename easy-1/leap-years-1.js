function isLeapYear2(year) {
  if (year % 4 === 0) {
    return year % 100 !== 0 || year % 400 === 0;
  }

  return false;
}

function isLeapYear2(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear2(2016));
console.log(isLeapYear2(2015));
console.log(isLeapYear2(2100));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(240000));
console.log(isLeapYear2(240001));
console.log(isLeapYear2(2000));
console.log(isLeapYear2(1900));
console.log(isLeapYear2(1752));
console.log(isLeapYear2(1700));
console.log(isLeapYear2(1));
console.log(isLeapYear2(100));
console.log(isLeapYear2(400));
