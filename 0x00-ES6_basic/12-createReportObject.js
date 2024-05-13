export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList
  };

  return {
    allEmployees,
    getNumberOfDepartments: function(employeesList) {
      return Object.keys(employeesList).length;
    }
  };
}
