interface Student {
  firstName: string;
  LastName: string;
  age: number;
  location: string;
}
const studentsList: Student[] = [
  {firstName: "Nenye", LastName: "Onyema", age: 20, location: "Canada"},
  {firstName: "Genny", LastName: "Onyema", age: 22, location: "Florida"}
];
const table = document.createElement('table');

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
