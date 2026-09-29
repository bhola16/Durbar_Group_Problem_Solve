# 🧩 Durbar Contest #5 — Code Lab Solutions

A collection of solutions for **Programming Hero Code Lab — Durbar Contest #5**, implemented in both **JavaScript** and **TypeScript**.

This project contains solutions to 10 programming problems covering fundamental concepts such as arrays, objects, loops, conditions, strings, `Set`, `Date`, queue simulation, optional chaining, and TypeScript types.

---

## 📌 Contest Information

- **Contest:** Durbar Contest #5
- **Platform:** Programming Hero Code Lab
- **Total Problems:** 10
- **Languages:** JavaScript & TypeScript
- **Difficulty:** Easy to Medium

---

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

---

# 📚 Problems

## 1. Find the Missing Number

Given an array containing `n` distinct numbers from `0` to `n`, find the missing number.

### Example

```js
missingNumber([3, 0, 1]);
// 2
```

### Approach

The solution calculates:

```text
Expected Sum - Actual Sum = Missing Number
```

The expected sum is calculated using:

```text
n × (n + 1) / 2
```

### Concepts

- Arrays
- `reduce()`
- Mathematical formulas
- Array traversal

**Time Complexity:** `O(n)`
**Space Complexity:** `O(1)`

---

## 2. Attendance Report Printer

Given a list of students with their attendance information, calculate their attendance percentage and assign an appropriate status.

### Attendance Rules

| Percentage   | Status    |
| ------------ | --------- |
| 90% or above | Excellent |
| 75%–89%      | Good      |
| Below 75%    | At Risk   |

### Example

```js
formatAttendanceReport([
  {
    name: "Rafi",
    present: 18,
    total: 20,
  },
]);

// ["Rafi: 18/20 (90%) - Excellent"]
```

### Concepts

- Arrays
- Objects
- `map()`
- Percentage calculation
- Conditional statements
- Template literals

**Time Complexity:** `O(n)`
**Space Complexity:** `O(n)`

---

## 3. Safe Profile Card

Generate a profile card from a user object while safely handling missing or `null` values.

### Example

```js
generateProfileCard({
  name: "Alice",
  social: {
    followers: 120,
  },
});

// "Alice | Unknown | followers: 120"
```

### Concepts

- Optional chaining `?.`
- Nullish coalescing `??`
- Nested objects
- Default values

### Important Operators

Optional chaining:

```js
user.address?.city;
```

This safely accesses `city` even when `address` does not exist.

Nullish coalescing:

```js
user.name ?? "Anonymous";
```

This uses `"Anonymous"` only when `name` is `null` or `undefined`.

**Time Complexity:** `O(1)`
**Space Complexity:** `O(1)`

---

## 4. Pagination Helper

Calculate pagination information using:

- Total number of items
- Page size
- Current page

The function returns:

```js
{
  (totalPages, startItem, endItem, hasPrev, hasNext);
}
```

### Example

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

### Formulas

```text
totalPages = ceil(totalItems / pageSize)

startItem = (currentPage - 1) × pageSize + 1

endItem = min(currentPage × pageSize, totalItems)
```

### Concepts

- `Math.ceil()`
- `Math.min()`
- Arithmetic
- Boolean expressions
- Objects

**Time Complexity:** `O(1)`
**Space Complexity:** `O(1)`

---

## 5. Rainfall Peaks

Find the positions of rainfall values that are greater than both of their neighboring values.

The returned positions use **1-based indexing**.

### Example

```js
findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]);

// [2, 5]
```

The values at positions `2` and `5` are greater than their neighboring values.

### Important Detail

The first and last elements cannot be peaks because they do not have two neighboring elements.

### Concepts

- Arrays
- Loops
- Array indexing
- Comparing neighboring elements

**Time Complexity:** `O(n)`
**Space Complexity:** `O(n)`

---

## 6. What Day Is It?

Given a year, month, and day, determine the day of the week.

### Example

```js
getDayOfWeek(2024, 5, 11);

// "Saturday"
```

### JavaScript Date

JavaScript's `Date` constructor uses **0-based months**:

```text
January   → 0
February  → 1
March     → 2
...
December  → 11
```

Therefore, the input month is adjusted using:

```js
new Date(year, month - 1, day);
```

The `getDay()` method returns:

```text
0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
```

### Concepts

- `Date`
- `getDay()`
- Arrays
- Date handling

**Time Complexity:** `O(1)`
**Space Complexity:** `O(1)`

---

## 7. Common Skills of Two Candidates

Find the skills shared by two candidates.

The comparison is:

- Case-insensitive
- Duplicate-free
- Alphabetically sorted

### Example

```js
commonSkills(["JS", "React", "Node"], ["react", "css", "js"]);

// ["js", "react"]
```

### Approach

```text
1. Convert the first candidate's skills to lowercase.
2. Store them in a Set.
3. Convert the second candidate's skills to lowercase.
4. Find matching skills.
5. Remove duplicates.
6. Sort the result.
```

### Concepts

- `Set`
- `map()`
- `filter()`
- `toLowerCase()`
- Spread operator
- `sort()`

**Time Complexity:** `O(n log n)`
**Space Complexity:** `O(n)`

---

## 8. Swap Keys and Values

Swap the keys and values of an object.

### Example

```js
swapKeysAndValues({
  a: "x",
  b: "y",
});

// {
//   x: "a",
//   y: "b"
// }
```

### Approach

The solution uses `Object.entries()` to access each key-value pair:

```js
for (const [key, value] of Object.entries(obj)) {
  result[value] = key;
}
```

### Duplicate Values

If multiple keys have the same value, the later key overwrites the earlier one.

```js
swapKeysAndValues({
  a: "x",
  b: "x",
});

// {
//   x: "b"
// }
```

### Concepts

- Objects
- `Object.entries()`
- `for...of`
- Dynamic object properties

**Time Complexity:** `O(n)`
**Space Complexity:** `O(n)`

---

## 9. Group Students by Grade Band

Group students into grade bands according to their marks.

### Grade Rules

|  Marks | Grade |
| -----: | :---: |
| 80–100 |   A   |
|  70–79 |   B   |
|  60–69 |   C   |
|   0–59 |   F   |

### Example

```js
groupStudentsByGradeBand([
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
  { name: "David", marks: 91 },
]);
```

### Output

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

### Approach

The marks are checked from the highest grade to the lowest:

```js
if (student.marks >= 80) {
  result.A.push(student);
} else if (student.marks >= 70) {
  result.B.push(student);
} else if (student.marks >= 60) {
  result.C.push(student);
} else {
  result.F.push(student);
}
```

### Concepts

- Arrays
- Objects
- Loops
- Conditional statements
- TypeScript object types

**Time Complexity:** `O(n)`
**Space Complexity:** `O(n)`

---

## 10. Ticket Queue Simulator

Simulate a ticket queue using the following commands:

```text
join <name>
leave <name>
serve
```

### Rules

- `join <name>` adds a person to the end of the queue.
- A person already waiting cannot join again.
- `leave <name>` removes the person if they are currently waiting.
- `serve` removes the first person from the queue.
- A served person can join the queue again later.
- Names are case-sensitive.

### Example

```js
simulateTicketQueue([
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve",
]);
```

### Output

```js
{
  queue: [],
  served: ["Rafi", "Alex"]
}
```

### Important Array Methods

Add someone to the back:

```js
queue.push(name);
```

Serve the first person:

```js
queue.shift();
```

Check whether someone is already waiting:

```js
queue.includes(name);
```

Find a person's position:

```js
queue.indexOf(name);
```

Remove a person:

```js
queue.splice(index, 1);
```

### Concepts

- Arrays
- Queue data structure
- `push()`
- `shift()`
- `includes()`
- `indexOf()`
- `splice()`
- String methods
- Loops
- Conditional statements

**Time Complexity:** `O(n²)` worst case
**Space Complexity:** `O(n)`

---

# 🧠 Concepts Practiced

These 10 problems cover a range of fundamental JavaScript and TypeScript concepts:

### JavaScript

- Variables and constants
- Functions
- Arrays
- Objects
- Loops
- Conditional statements
- `map()`
- `filter()`
- `reduce()`
- `sort()`
- `Set`
- `Object.entries()`
- `push()`
- `shift()`
- `splice()`
- `includes()`
- `indexOf()`
- `slice()`
- `startsWith()`
- `toLowerCase()`
- Template literals
- Optional chaining
- Nullish coalescing
- JavaScript `Date`
- Queue simulation

### TypeScript

- Type aliases
- Array types
- Object types
- Optional properties
- Union types
- Function parameter types
- Function return types
- Typed objects
- Typed arrays
