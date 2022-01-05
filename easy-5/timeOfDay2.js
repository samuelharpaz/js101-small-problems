const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

function extractHoursMinutes(time) {
  const hours = (+time.slice(0, 2)) % HOURS_PER_DAY;
  const minutes = +time.slice(-2);

  return [hours, minutes];
}

function afterMidnight(time) {
  const [ hours, minutes ] = extractHoursMinutes(time);
  const totalMinutes = ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
  return totalMinutes;
}

function beforeMidnight(time) {
  const totalMinutes = afterMidnight(time);
  return (MINUTES_PER_DAY - totalMinutes) % MINUTES_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);