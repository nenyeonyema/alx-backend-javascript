const readline = require('readline')
const rl = readline.createInterface(
  process.stdin,
  process.stdout
);
rl.setPrompt("Welcome to Holberton School, what is your name?");
rl.prompt()
rl.on('line', (answer) => {
  console.log(`Your name is: ${answer}`);
  console.log('This important software is now closing');
  rl.close();
});
