const dms = function(angle) {
  const DEGREE_SYMBOL = '\xB0';
  const MINUTES_IN_DEGREE = 60;
  const SECONDS_IN_MINUTE = 60;

  if (angle < 0) {
    angle = 360 + (angle % 360);
  }

  if (angle >= 360) {
    angle = angle % 360;
  }

  const degrees = Math.floor(angle);
  const minutes = (angle - degrees) * MINUTES_IN_DEGREE;
  const minutesInt = Math.floor(minutes);
  const seconds = Math.round((minutes - minutesInt) * SECONDS_IN_MINUTE);

  return `${degrees}${DEGREE_SYMBOL}${pad(minutesInt)}'${pad(seconds)}"`;
};

const pad = num => {
  return String(num).padStart(2, '0');
};

console.log(dms(76.73));
console.log(dms(30));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));

console.log(dms(-1));
console.log(dms(400));
console.log(dms(-40));
console.log(dms(-420));