let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => function (student) {
            console.log(this.title + ": " + student);
        }.call(this, stu));
    }
};
group.showList();