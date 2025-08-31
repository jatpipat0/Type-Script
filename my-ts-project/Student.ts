class Course {
  courseName: string;
  grade: number;

  constructor(courseName: string, grade: number) {
    this.courseName = courseName;
    this.grade = grade;
  }

  toString(): string {
    return `${this.courseName} (Grade: ${this.grade})`;
  }
}

// class Student
class Student {
  studentID: string;
  name: string;
  courses: Course[];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  getAverage(): number {
    if (this.courses.length === 0) return 0;
    let sum = this.courses.reduce((acc, c) => acc + c.grade, 0);
    return sum / this.courses.length;
  }

  showInfo() {
    console.log(`ID: ${this.studentID}, Name: ${this.name}, Average: ${this.getAverage().toFixed(2)}`);
    this.courses.forEach(c => console.log("  " + c.toString()));
  }
}

// สร้างนักศึกษา 3 คน
let s1 = new Student("001", "Alice");
let s2 = new Student("002", "Bob");
let s3 = new Student("003", "Charlie");

// เพิ่มรายวิชาเริ่มต้น 4 วิชา
s1.addCourse(new Course("Math", 3.5));
s1.addCourse(new Course("English", 3.0));
s1.addCourse(new Course("Physics", 2.7));
s1.addCourse(new Course("Chemistry", 3.8));

s2.addCourse(new Course("Math", 2.5));
s2.addCourse(new Course("English", 3.3));
s2.addCourse(new Course("Biology", 3.0));
s2.addCourse(new Course("History", 2.8));

s3.addCourse(new Course("Math", 4.0));
s3.addCourse(new Course("English", 3.5));
s3.addCourse(new Course("Art", 3.7));
s3.addCourse(new Course("Music", 3.9));

let students: Student[] = [s1, s2, s3];

// แสดงผลก่อนเพิ่มวิชาใหม่
console.log("\n=== Student Info Before Adding New Course ===");
students.forEach(s => s.showInfo());

// เพิ่มวิชาใหม่
s1.addCourse(new Course("Programming", 4.0));
s2.addCourse(new Course("Programming", 3.5));
s3.addCourse(new Course("Programming", 3.8));

// แสดงผลหลังเพิ่มวิชาใหม่
console.log("\n=== Student Info After Adding New Course ===");
students.forEach(s => s.showInfo());
