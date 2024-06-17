console.log("Welcome to Holberton School, what is your name?");

// Prepare to handle the standard input
process.stdin.setEncoding('utf8');

// Read data from standard input
process.stdin.on('data', (data) => {
  // Remove any trailing newline characters from the input
  const name = data.trim();
  
  // Display the entered name
  console.log(`Your name is: ${name}`);
  
  // Close the input stream
  process.stdin.end();
});

// When the input stream ends, display the closing message
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
