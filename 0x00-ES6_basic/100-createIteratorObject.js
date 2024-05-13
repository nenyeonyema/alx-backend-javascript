export default function* createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  // Iterate over each department
  for (const department in allEmployees) {
    const employees = allEmployees[department];
    
    // Iterate over each employee in the department
    for (const employee of employees) {
      yield employee;
    }
  }
}
