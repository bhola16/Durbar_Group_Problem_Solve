type Student = {
  name: string;
  present: number;
  total: number;
};

function formatAttendanceReport(students: Student[]): string[] {
  return students.map((student) => {
    const percentage = Math.round((student.present / student.total) * 100);

    let status: string;

    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }

    return `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`;
  });
}

console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));

console.log(
  formatAttendanceReport([
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ]),
);
