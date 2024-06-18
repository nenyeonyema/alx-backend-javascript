const express = require('express');
const path = require('path');
const countStudents = require('./3-1read_file_async');

const app = express();
const PORT = 1245;

// Define the root route
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', async (req, res) => {
  const filename = path.resolve(process.argv[2]);

  try {
    const studentData = await countStudents(filename);
    res.type('text/plain');
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.status(500).type('text/plain');
    res.send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app for external usage
module.exports = app;
