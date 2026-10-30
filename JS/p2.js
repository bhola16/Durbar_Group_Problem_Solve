function updateNotificationCount(initialCount, events) {
  let count = initialCount;

  for (const event of events) {
    const value = event.count ?? 1;

    if (event.type === "ADD") {
      count += value;
    } 
    else if (event.type === "READ") {
      count = Math.max(0, count - value);
    } 
    else if (event.type === "CLEAR") {
      count = 0;
    }
  }

  return count;
}

// Test cases
console.log(updateNotificationCount(2, [
  { type: "ADD", count: 3 },
  { type: "READ", count: 1 }
])); // 4

console.log(updateNotificationCount(5, [
  { type: "READ", count: 10 },
  { type: "ADD", count: 2 },
  { type: "CLEAR" }
])); // 0

console.log(updateNotificationCount(10, [
  { type: "READ" },
  { type: "ADD" }
])); // 10

console.log(updateNotificationCount(0, [])); // 0