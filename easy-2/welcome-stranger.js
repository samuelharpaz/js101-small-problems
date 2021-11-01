const greetings = (nameArray, { title, occupation }) => {
  const name = nameArray.join(' ');

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around!`;
};

console.log(
  greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
);

console.log(
  greetings(['Jack', 'Williams', 'Esq.'], {
    title: 'Senior',
    occupation: 'Developer'
  })
);
