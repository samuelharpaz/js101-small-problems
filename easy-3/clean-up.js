function cleanUp(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let cleaned = '';

  for (let idx = 0; idx < str.length; idx++) {
    const char = str[idx];

    if (alphabet.includes(char.toLowerCase())) {
      cleaned += char;
    } else if (cleaned[cleaned.length - 1] !== ' ') {
      cleaned += ' ';
    }    
  }

  return cleaned;
}

console.log(cleanUp("---what's my +*& line?"));