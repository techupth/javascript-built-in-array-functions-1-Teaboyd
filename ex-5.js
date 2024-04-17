const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const total = students.reduce((acc,curr) => {
    return curr.score + acc;
  },0);
  // Start coding here
  return total/students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
