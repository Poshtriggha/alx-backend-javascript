import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFilePath = process.argv[2];

    try {
      const fields = await readDatabase(dbFilePath);
      let responseText = 'This is the list of our students\n';

      Object.keys(fields).sort().forEach(field => {
        const studentCount = fields[field].length;
        const studentNames = fields[field].join(', ');
        responseText += `Number of students in ${field}: ${studentCount}. List: ${studentNames}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFilePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(dbFilePath);
      if (!fields[major]) {
        res.status(200).send('List:');
        return;
      }

      const studentNames = fields[major].join(', ');
      res.status(200).send(`List: ${studentNames}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
