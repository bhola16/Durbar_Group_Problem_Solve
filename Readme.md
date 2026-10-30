# 🚀 Durbar Contest #7

My solutions for **Durbar Contest #7** on Code Lab.

This contest focuses mainly on **JavaScript functions, arrays, objects, recursion, sorting, greedy algorithms, interval scheduling, graph traversal, and practical problem-solving**.

## 🛠️ Technologies Used

- JavaScript
- Arrays
- Objects
- Loops
- Conditional Statements
- Array Methods
- String Manipulation
- Mathematical Operations
- Recursion
- Sorting
- Greedy Algorithms
- Interval Scheduling
- Graph Data Structures
- Breadth-First Search (BFS)
- Queue
- Set

## 📂 Problems & Concepts

### A. Countdown Time Formatter

Converts a non-negative integer representing total seconds into a formatted time string in `HH:MM:SS` format.

**Concepts:**

- Mathematical operations
- Division and modulo operators (`%`)
- `Math.floor()`
- String manipulation
- `String()`
- `padStart()`
- Template literals

Example:

```js
formatCountdown(3661);
// "01:01:01"

formatCountdown(59);
// "00:00:59"
```

---

### B. Notification Badge Counter

Updates a notification badge count based on a sequence of events: ADD, READ, and CLEAR.

**Concepts:**

- Arrays of objects
- Loops
- Conditional statements
- Object properties
- Nullish coalescing operator (`??`)
- `Math.max()`
- State management

Example:

```js
updateNotificationCount(2, [
  { type: "ADD", count: 3 },
  { type: "READ", count: 1 }
]);
// 4

updateNotificationCount(5, [
  { type: "READ", count: 10 },
  { type: "ADD", count: 2 },
  { type: "CLEAR" }
]);
// 0
```

---

### C. Nested Folder File Counter

Counts the total number of files in a nested folder structure, including files inside multiple levels of subfolders.

**Concepts:**

- Nested objects
- Arrays
- Recursion
- Conditional statements
- `for...of` loops
- Tree traversal

Example:

```js
countFilesInFolder([
  { name: "document.txt", type: "file" },
  {
    name: "images",
    type: "folder",
    children: [
      { name: "photo1.jpg", type: "file" },
      { name: "photo2.png", type: "file" }
    ]
  },
  { name: "report.pdf", type: "file" }
]);
// 4
```

---

### D. Student Ranking with Ties

Sorts students by their scores in descending order and assigns competition ranks. Students with equal scores receive the same rank, while subsequent ranks are skipped.

**Concepts:**

- Arrays of objects
- Sorting
- Comparison functions
- Conditional statements
- Array indexing
- Competition ranking (1, 2, 2, 4)
- Spread operator (`...`)

Example:

```js
rankStudents([
  { name: "Alice", score: 90 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 85 }
]);
// [
//   { name: "Bob", score: 95, rank: 1 },
//   { name: "Alice", score: 90, rank: 2 },
//   { name: "Charlie", score: 90, rank: 2 },
//   { name: "David", score: 85, rank: 4 }
// ]
```

---

### E. Best Discount Selector

Selects the single discount offer that produces the lowest final payable price based on the purchase amount and offer eligibility.

**Concepts:**

- Arrays of objects
- Loops
- Conditional statements
- Flat and percentage discounts
- Minimum price validation
- `Math.max()`
- Finding minimum values

Example:

```js
selectBestDiscount(200, [
  { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
  { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
]);
// { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
```

---

### F. Elevator Floor Tracker

Simulates elevator movement based on UP and DOWN commands while ensuring the elevator never moves beyond the building's minimum and maximum floors.

**Concepts:**

- Loops
- Arrays
- Conditional statements
- State tracking
- `Math.min()`
- `Math.max()`

Example:

```js
trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]);
// 2

trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"]);
// 9
```

---

### G. Find Free Time Intervals

Finds all available time intervals within working hours by excluding booked intervals, including overlapping bookings.

**Concepts:**

- Arrays of intervals
- Sorting
- Greedy approach
- Interval merging
- Overlap detection
- `Math.max()`
- `Math.min()`

Example:

```js
findFreeTime(
  [[10, 12], [14, 16], [11, 15]],
  [9, 17]
);
// [[9, 10], [16, 17]]
```

---

### H. Max Non-Overlapping Tasks

Finds the maximum number of tasks that a single person can complete without overlapping intervals.

**Concepts:**

- Arrays
- Sorting
- Greedy algorithm
- Interval scheduling
- Comparison functions
- Conditional statements
- `Infinity`

Example:

```js
maxTasks([
  [1, 4],
  [2, 3],
  [3, 5],
  [7, 9]
]);
// 3

maxTasks([
  [1, 2],
  [2, 3],
  [3, 4]
]);
// 3
```

---

### I. Reconcile Product Inventory

Updates product inventory by processing stock-in and stock-out transactions. New products are initialized with zero stock, and inventory quantities cannot become negative.

**Concepts:**

- Objects
- Arrays of objects
- Loops
- Conditional statements
- Object property access
- Spread operator (`...`)
- `Math.max()`
- Inventory management

Example:

```js
reconcileInventory(
  { apple: 10, banana: 5 },
  [
    { productId: "apple", quantity: 3, type: "in" },
    { productId: "banana", quantity: 2, type: "out" }
  ]
);
// { apple: 13, banana: 3 }
```

---

### J. Connected Friends

Finds the total number of people connected to a starting person through mutual friendships using an undirected graph.

**Concepts:**

- Graph data structures
- Undirected graphs
- Adjacency lists
- Breadth-First Search (BFS)
- Queue
- `Set`
- Graph traversal
- Visited nodes

Example:

```js
countConnectedFriends(
  [
    ["Alice", "Bob"],
    ["Bob", "Charlie"],
    ["David", "Eve"]
  ],
  "Alice"
);
// 3

countConnectedFriends(
  [
    ["Alice", "Bob"],
    ["Charlie", "David"]
  ],
  "Eve"
);
// 1
```

## 📁 Project Structure

```text
Contest 7/
│
├── JS/
│   ├── p1.js
│   ├── p2.js
│   ├── p3.js
│   ├── p4.js
│   ├── p5.js
│   ├── p6.js
│   ├── p7.js
│   ├── p8.js
│   ├── p9.js
│   └── p10.js
│
└── README.md
```

## 📚 What I Practiced

Through these problems, I practiced:

- Formatting time using mathematical operations and string methods.
- Processing event-based updates using arrays and objects.
- Traversing nested folder structures using recursion.
- Sorting students and assigning competition ranks with ties.
- Comparing discount offers and selecting optimal results.
- Simulating elevator movement with boundary conditions.
- Finding available time slots by merging overlapping intervals.
- Solving interval scheduling problems using greedy algorithms.
- Managing product inventory through sequential transactions.
- Building undirected graphs using adjacency lists.
- Finding connected people using BFS traversal.
- Working with JavaScript `Set`, queues, and the spread operator.
- Handling edge cases and writing reusable JavaScript functions.
- Testing solutions using `console.log()`.

## 🎯 Goal

The goal of this repository is to document my **JavaScript problem-solving journey** and strengthen my understanding of data structures and algorithms through regular coding challenges.

---

**Durbar Contest #7**

💻 Keep coding. Keep learning. Keep improving. 🚀