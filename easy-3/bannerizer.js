// function logInBox(str) {
//   const space = str.length + 2;
//   const horizontalRule = `+${'-'.repeat(space)}+`;
//   const emptyLine = `|${' '.repeat(space)}|`;

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${str} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

// function logInBox(str, maxWidth) {
//   if (str.length + 4 > maxWidth) {
//     const lettersOver = (str.length + 4) - maxWidth;
//     str = str.slice(0, -lettersOver);
//   }

//   const space = str.length + 2;
//   const horizontalRule = `+${'-'.repeat(space)}+`;
//   const emptyLine = `|${' '.repeat(space)}|`;

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${str} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

function printLine(text) {
  console.log(`| ${text} |`);
}

function printMsg(str, lineLength) {
  let curr = 0;
  let line = str.substr(0, lineLength);

  while (line.length) {
    printLine(line.padEnd(lineLength, ' '));
    curr += lineLength;
    line = str.substr(curr, lineLength);
  }
}


function logInBox(str, maxWidth) {
  if (maxWidth < 5) {
    return console.log('Max width must be 5 or greater');
  }
  let lineLength = maxWidth ? Math.min(maxWidth - 4, str.length) : str.length;

  const space = lineLength + 2;
  const horizontalRule = `+${'-'.repeat(space)}+`;
  const emptyLine = `|${' '.repeat(space)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  printMsg(str, lineLength);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.', 18);