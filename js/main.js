var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
    Student.prototype.getFullName = function () {
        return this.fullName;
    };
    return Student;
}());
function helloGuy(person) {
    return "Hello " + person.fullName + "!";
}
var user = new Student("Charlie", "Filpo");
console.log(helloGuy(user));
