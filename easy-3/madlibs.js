const rl = require('readline-sync');

const noun = rl.question('Enter a noun:\n');
const verb = rl.question('Enter a verb:\n');
const adjective = rl.question('Enter an adjective:\n');
const adverb = rl.question('Enter an adverb:\n');

console.log(`I can't tell you how many times I wanted to just ${verb} ${adverb} in the ${adjective} ${noun}`);
console.log(`Why won't you ${adverb} ${verb} the ${adjective} ${noun}s?`);
