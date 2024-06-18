// 3-read_file_async.js

const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, 'utf8');

    // Split the file content by new lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Check if there are any lines (excluding header)
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return Promise.resolve();
    }

    // Extract the header and the student lines
    const [header, ...studentLines] = lines;

    // Initialize a dictionary to count students by field
    const fields = {};

    studentLines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      // Ensure that the student line is valid
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Count total number of students
    const totalStudents = studentLines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field and list their names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    return Promise.resolve();
  } catch (error) {
    // Handle file read errors/
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
