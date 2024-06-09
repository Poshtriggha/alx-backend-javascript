const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) { // Check if there's no student data
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1); // Skip the header line
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};
    
    // Iterate over each student line and parse the CSV
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (field in fields) {
        fields[field].push(firstname);
      } else {
        fields[field] = [firstname];
      }
    });

    // Log the number of students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
