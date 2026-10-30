function findFreeTime(bookedIntervals, workingHours) {
  const [workStart, workEnd] = workingHours;

  const sorted = [...bookedIntervals].sort((a, b) => a[0] - b[0]);

  const freeTime = [];
  let currentTime = workStart;

  for (const [start, end] of sorted) {
    if (end <= workStart || start >= workEnd) {
      continue;
    }

    if (start > currentTime) {
      freeTime.push([currentTime, start]);
    }

    currentTime = Math.max(currentTime, end);

    currentTime = Math.min(currentTime, workEnd);
  }

  if (currentTime < workEnd) {
    freeTime.push([currentTime, workEnd]);
  }

  return freeTime;
}

// Test case 1
console.log(findFreeTime(
  [[10, 12], [14, 16]],
  [9, 17]
));
// Output: [[9, 10], [12, 14], [16, 17]]

// Test case 2
console.log(findFreeTime(
  [[10, 12], [14, 16], [11, 15]],
  [9, 17]
));
// Output: [[9, 10], [16, 17]]

// Test case 3
console.log(findFreeTime(
  [[8, 10], [12, 18]],
  [9, 17]
));
// Output: [[10, 12]]

// Test case 4
console.log(findFreeTime(
  [],
  [9, 17]
));
// Output: [[9, 17]]