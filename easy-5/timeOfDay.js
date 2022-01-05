function timeOfDay(int) {  
  const [hours, minutes] = calcHoursMinutes(int);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

function calcHoursMinutes(int) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  
  let intAbs = Math.abs(int);
  
  let hours = (Math.floor(intAbs / MINUTES_PER_HOUR)) % HOURS_PER_DAY;
  let minutes = intAbs % MINUTES_PER_HOUR;

  if (Math.sign(int) === -1) {
    hours = HOURS_PER_DAY - hours;
    if (minutes > 0) {
      minutes = MINUTES_PER_HOUR - minutes;
      hours -= 1;
    }
  }

  return [hours, minutes];
}

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return formatTime(hours, minutes);
// }

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");