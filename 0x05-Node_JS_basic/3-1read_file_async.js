const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0\n';
    }

    const [header, ...studentLines] = lines;
    const fields = {};

    studentLines.forEach(line => {
      const [firstname, , , field] = line.split(',');

      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    let output = `Number of students: ${studentLines.length}\n`;
    for (const [field, students] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
