// 1. Create Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // Calculate Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Final Result
    getFinalResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 2. Create Students Array
let studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 95),
    new Student(102, "Mona", [45, 48, 42], 80),
    new Student(103, "Ali", [70, 75, 80], 90),
    new Student(104, "Sara", [40, 45, 48], 85)
];

// 3. Filter Struggling Students
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 4. Add 5 Mercy Marks using map
let mercyStudents = strugglingStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});

// 5. Calculate Total using reduce
let totalAfterMercy = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// 6. Calculate Mercy Average
let mercyAverage = 0;

if (mercyStudents.length > 0) {
    mercyAverage = totalAfterMercy / mercyStudents.length;
}

// 7. Print Students Report
console.log("===== Students Report =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log("Student Name:", student.name);
    console.log("Average:", average);
    console.log("Grade:", student.getGrade(average));
    console.log("Result:", student.getFinalResult(average));
    console.log("-------------------------");
});

// 8. Print Mercy Students
console.log("===== Mercy Students =====");
console.log(mercyStudents);

// 9. Print Mercy Average
console.log("Mercy Average:", mercyAverage);