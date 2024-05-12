interface Teacher {
  readonly firstName: string; // Can modified once after initialization
  readonly lastName: string; // Can modified once after initialization
  fullTimeEmployee: boolean; // Should always be defined
  yearsOfExperience?: number; // Should be optional
  location: string; // Should always be defined
  [key: string]: any; // accepts any type.
}
interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherData {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherData = (firstName, lastName) => {
  const firstinitial = firstName[0];
  return `${firstinitial}. ${lastName}`; 
}
console.log(printTeacher("John", "Doe"));

// A class
interface studentData {
  firstName: string;
  lastName: string;
}
interface studentMethod {
  workOnHomework(): string;
  displayName(): string;
}
class studentClass implements studentMethod {
  private firstName: string;
  private lastName: string;

  constructor({firstName, lastName}: studentData) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
const student1 = new studentClass({firstName: "Nenye", lastName: "Onyema"});
console.log(student1.workOnHomework());
console.log(student1.displayName());
