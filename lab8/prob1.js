let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
        if (!this.hasOwnProperty('grades')) {
            this.grades = [];
            this.grades.push(newGrade)
        } else this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        return this.grades.reduce((a, b) => a + b) / this.grades.length;
    }
}
let students = [];

let stu1 = Object.create(student);
stu1.firstName = "Antony";
stu1.lastName = "Arnold";
stu1.inputNewGrade(100);
stu1.inputNewGrade(100);
stu1.inputNewGrade(70);
console.log(stu1.grades);

let stu2 = Object.create(student);
stu2.firstName = "Jack";
stu2.lastName = "Tompson";
stu2.inputNewGrade(90);
stu2.inputNewGrade(80);
stu2.inputNewGrade(40);
console.log(stu2.grades);
let stu3 = Object.create(student);
stu3.firstName = "Grace";
stu3.lastName = "Abraham";
stu3.inputNewGrade(100);
stu3.inputNewGrade(100);
stu3.inputNewGrade(40);
console.log(stu3.grades);
students.push(stu1, stu2, stu3);

students.forEach(function (a) {
    console.log(a.firstName, a.computeAverageGrade());
});
// Output:
// Antony 90
// Jack 70
// Grace 80
