function maxTasks(tasks) {
  // Sort tasks by finishing time
  const sorted = [...tasks].sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinish = -Infinity;

  for (const [start, finish] of sorted) {
    if (start >= lastFinish) {
      count++;
      lastFinish = finish;
    }
  }

  return count;
}

// Test case 1
console.log(maxTasks([[1, 4], [2, 3], [3, 5], [7, 9]]));
// Output: 3

// Test case 2
console.log(maxTasks([[1, 2], [2, 3], [3, 4]]));
// Output: 3

// Test case 3
console.log(maxTasks([[1, 5], [2, 6], [3, 7]]));
// Output: 1

// Test case 4
console.log(maxTasks([]));
// Output: 0