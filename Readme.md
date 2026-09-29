# 🚀 Durbar Contest #5

My solutions for **Durbar Contest #5** on Code Lab.

This contest focuses mainly on **JavaScript/TypeScript arrays, objects, loops, conditions, data structures, string manipulation, and practical problem-solving**.

## 🛠️ Technologies Used

* JavaScript
* TypeScript
* Arrays
* Objects
* Loops
* Conditional Statements
* Array Methods
* `Set`
* JavaScript `Date`
* String Manipulation
* Queue Data Structure

## 📂 Problems & Concepts

### A. Find the Missing Number

Finds the missing number from an array containing numbers from `0` to `n`.

**Concepts:**

* Arrays
* `reduce()`
* Mathematical formulas
* Array traversal

Example:

```js
missingNumber([3, 0, 1]);
// 2
```

---

### B. Attendance Report Printer

Calculates student attendance percentages and assigns an attendance status based on the percentage.

**Concepts:**

* Objects
* Arrays
* `map()`
* Percentage calculation
* Conditional statements
* Template literals

Example:

```js
formatAttendanceReport([
  { name: "Rafi", present: 18, total: 20 }
]);
// ["Rafi: 18/20 (90%) - Excellent"]
```

---

### C. Safe Profile Card

Generates a profile card while safely handling missing or `null` nested properties.

**Concepts:**

* Optional chaining `?.`
* Nullish coalescing `??`
* Nested objects
* Default values

Example:

```js
generateProfileCard({
  name: "Alice",
  social: { followers: 120 }
});
// "Alice | Unknown | followers: 120"
```

---

### D. Pagination Helper

Calculates pagination metadata such as total pages, item range, and previous/next page availability.

**Concepts:**

* `Math.ceil()`
* `Math.min()`
* Arithmetic
* Boolean conditions
* Objects

Example:

```js
getPageMetadata(95, 10, 10);
// {
//   totalPages: 10,
//   startItem: 91,
//   endItem: 95,
//   hasPrev: true,
//   hasNext: false
// }
```

---

### E. Rainfall Peaks

Finds the positions of rainfall values that are greater than both neighboring values.

**Concepts:**

* Arrays
* Loops
* Array indexing
* Comparing neighboring elements

Example:

```js
findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]);
// [2, 5]
```

---

### F. What Day Is It?

Determines the day of the week from a given year, month, and day.

**Concepts:**

* JavaScript `Date`
* `getDay()`
* Arrays
* Date handling

Example:

```js
getDayOfWeek(2024, 5, 11);
// "Saturday"
```

---

### G. Common Skills of Two Candidates

Finds the skills shared by two candidates while ignoring case, removing duplicates, and sorting the result alphabetically.

**Concepts:**

* `Set`
* `map()`
* `filter()`
* `sort()`
* `toLowerCase()`
* Spread operator

Example:

```js
commonSkills(
  ["JS", "React", "Node"],
  ["react", "css", "js"]
);
// ["js", "react"]
```

---

### H. Swap Keys and Values

Swaps the keys and values of an object.

**Concepts:**

* Objects
* `Object.entries()`
* `for...of`
* Dynamic object properties

Example:

```js
swapKeysAndValues({
  a: "x",
  b: "y"
});
// { x: "a", y: "b" }
```

If multiple keys have the same value, the later key overwrites the previous one.

---

### I. Group Students by Grade Band

Groups students according to their marks into four grade bands.

**Grade Bands:**

* **A:** 80 or above
* **B:** 70–79
* **C:** 60–69
* **F:** Below 60

**Concepts:**

* Arrays
* Objects
* Loops
* Conditional statements
* Object typing in TypeScript

Example:

```js
groupStudentsByGradeBand([
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
  { name: "David", marks: 91 }
]);
```

Output:

```js
{
  A: [
    { name: "Alice", marks: 85 },
    { name: "David", marks: 91 }
  ],
  B: [
    { name: "Bob", marks: 72 }
  ],
  C: [],
  F: [
    { name: "Charlie", marks: 58 }
  ]
}
```

---

### J. Ticket Queue Simulator

Simulates a ticket queue using `join`, `leave`, and `serve` commands.

**Concepts:**

* Arrays
* Queue data structure
* `push()`
* `shift()`
* `includes()`
* `indexOf()`
* `splice()`
* String methods

Example:

```js
simulateTicketQueue([
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
]);

// {
//   queue: [],
//   served: ["Rafi", "Alex"]
// }
```

## 📁 Project Structure

```text
Contest 5/
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
├── src/
│   ├── p1.ts
│   ├── p2.ts
│   ├── p3.ts
│   ├── p4.ts
│   ├── p5.ts
│   ├── p6.ts
│   ├── p7.ts
│   ├── p8.ts
│   ├── p9.ts
│   └── p10.ts
│
└── tsconfig.json
```

## 📚 What I Practiced

Through these problems, I practiced:

* Array manipulation
* Object manipulation
* Loops and conditions
* Array methods
* String manipulation
* `Set` and uniqueness
* JavaScript `Date`
* Queue data structures
* Optional chaining
* Nullish coalescing
* TypeScript type definitions
* Function parameter and return types
* Handling edge cases
* Thinking about time and space complexity
* Writing reusable functions

## 🎯 Goal

The goal of this repository is to document my **competitive programming practice** and improve my problem-solving skills through regular coding challenges.

---

**Durbar Contest #5**
💻 Keep coding. Keep learning. Keep improving. 🚀
