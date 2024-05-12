var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var firstinitial = firstName[0];
    return "".concat(firstinitial, ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var studentClass = /** @class */ (function () {
    function studentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
var student1 = new studentClass({ firstName: "Nenye", lastName: "Onyema" });
console.log(student1.workOnHomework());
console.log(student1.displayName());
