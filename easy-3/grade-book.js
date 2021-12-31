function getGrade(sc1, sc2, sc3) {
  const mean = (sc1 + sc2 + sc3) / 3;

  let letterGrade;

  if (mean >= 90) {
    letterGrade = 'A';
  } else if (mean >= 80) {
    letterGrade = 'B';
  } else if (mean >= 70) {
    letterGrade = 'C';
  } else if (mean >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return letterGrade;
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));

function getAverage(...scores) {
  console.log(scores);
  let sum = (num1, num2) => num1 + num2;
  return scores.reduce(sum) / scores.length;
}

console.log(getAverage(45, 87, 98, 100, 91, 75));