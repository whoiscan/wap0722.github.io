function Student(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
    if (!this.hasOwnProperty('grades')) {
        this.grades = [];
        this.grades.push(newGrade)
    } else this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((a, b) => a + b) / this.grades.length;
}
let stu1 = new Student('Antony', 'Arnold');
stu1.inputNewGrade(100);
stu1.inputNewGrade(100);
stu1.inputNewGrade(70);

let stu2 = new Student('Grace', 'Abraham');
stu2.inputNewGrade(50);
stu2.inputNewGrade(100);
stu2.inputNewGrade(30);

let stu3 = new Student('Tony', 'Smith');
stu3.inputNewGrade(100);
stu3.inputNewGrade(100);
stu3.inputNewGrade(10);
let students = [stu1, stu2, stu3];
students.forEach(function (a) {
        console.log(a.firstName, a.computeAverageGrade())
    }
);
//Output:
// Antony 90
// Grace 60
// Tony 70
