const fs = require('fs');
const path = require('path');
const basedir = path.join(__dirname);


function countStudents(filePath) {
  try {
    // Attempt to read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Check if there are any lines (excluding header)
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
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
  } catch (error) {
    // If file read fails, throw the specified error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
