// full_server/utils.js

import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

async function readDatabase(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      return {};
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

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
