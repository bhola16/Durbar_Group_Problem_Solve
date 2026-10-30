function rankStudents(students) {
  const sorted = [...students].sort((a, b) => b.score - a.score);

  let rank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].score !== sorted[i - 1].score) {
      rank = i + 1;
    }

    sorted[i].rank = rank;
  }

  return sorted;
}

// Test case 1
const students1 = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 85 }
];

console.log(rankStudents(students1));

// Test case 2
const students2 = [
  { name: "Eva", score: 100 },
  { name: "Frank", score: 100 },
  { name: "Grace", score: 100 }
];

console.log(rankStudents(students2));