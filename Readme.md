# 🚀 Durbar Contest #6

My solutions for **Durbar Contest #6** on Code Lab.

This contest focuses mainly on **JavaScript arrays, objects, loops, conditions, regular expressions, date handling, mathematical algorithms, and practical problem-solving**.

## 🛠️ Technologies Used

* JavaScript
* Arrays
* Objects
* Loops
* Conditional Statements
* Array Methods
* String Manipulation
* Regular Expressions
* JavaScript `Date`
* Mathematical Algorithms
* Two-Pointer Technique
* Matrix Traversal
* URL Encoding

## 📂 Problems & Concepts

### A. Merge Two Sorted Arrays

Merges two sorted arrays into a single sorted array without using a built-in sorting method.

**Concepts:**

* Arrays
* Two-pointer technique
* `while` loops
* Array traversal
* `push()`

Example:

```js
mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// [1, 2, 3, 4, 5, 6]
```

---

### B. Shopping Cart Total Calculator

Calculates the total cost of shopping cart items by applying discounts and tax.

**Concepts:**

* Arrays of objects
* Loops
* Discount calculation
* Tax calculation
* Floating-point precision
* `toFixed()`

Example:

```js
calculateCartTotal(
  [
    { price: 100, quantity: 2, discount: 10 },
    { price: 50, quantity: 1, discount: 0 }
  ],
  0.1
);
// 247.5
```

---

### C. Validate an Email Address

Checks whether an email address matches a basic email format using a regular expression.

**Concepts:**

* Strings
* Regular expressions
* `test()`
* Input validation

Example:

```js
isValidEmail("user@example.com");
// true

isValidEmail("invalid-email");
// false
```

---

### D. Greatest Common Divisor (GCD)

Finds the greatest common divisor of two numbers using the Euclidean algorithm.

**Concepts:**

* Mathematics
* `while` loops
* Modulo operator `%`
* Variable updates
* Euclidean algorithm

Example:

```js
gcd(12, 18);
// 6

gcd(20, 8);
// 4
```

---

### E. Longest Increasing Streak

Finds the length of the longest contiguous, strictly increasing sequence in an array.

**Concepts:**

* Arrays
* Loops
* Conditional statements
* Array indexing
* Tracking consecutive elements

Example:

```js
longestIncreasingStreak([1, 2, 3, 2, 4, 5, 6]);
// 4
```

---

### F. Split Array into Chunks

Splits an array into smaller arrays of a specified size.

**Concepts:**

* Arrays
* `slice()`
* `for` loops
* Array indexing
* Incrementing by a specified size

Example:

```js
chunkArray([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

---

### G. Validate Bangladeshi Mobile Number

Checks whether a phone number follows an accepted Bangladeshi mobile number format.

**Concepts:**

* Strings
* Regular expressions
* Input validation
* Pattern matching

Example:

```js
isValidBdMobileNumber("01712345678");
// true

isValidBdMobileNumber("+8801712345678");
// true

isValidBdMobileNumber("0212345678");
// false
```

---

### H. Calculate Days Between Dates

Calculates the absolute number of days between two given dates.

**Concepts:**

* JavaScript `Date`
* Timestamp differences
* `Math.abs()`
* Mathematical calculations

Example:

```js
daysBetweenDates("2026-01-01", "2026-01-10");
// 9
```

---

### I. Convert Object to URL Query String

Converts an object's key-value pairs into a URL query string while encoding special characters.

**Concepts:**

* Objects
* `Object.entries()`
* `map()`
* `join()`
* `encodeURIComponent()`
* String manipulation

Example:

```js
toQueryString({
  name: "Bhola",
  city: "Dhaka"
});
// "name=Bhola&city=Dhaka"
```

---

### J. Sum the Main and Secondary Diagonals

Calculates the sums of the main diagonal and secondary diagonal of a square matrix.

**Concepts:**

* Two-dimensional arrays
* Array indexing
* Loops
* Matrix traversal
* Arithmetic operations

Example:

```js
diagonalSums([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
// { main: 15, secondary: 15 }
```

The main diagonal uses `matrix[i][i]`, while the secondary diagonal uses `matrix[i][n - 1 - i]`.

## 📁 Project Structure

```text
Contest 6/
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

* Merging sorted arrays using the two-pointer technique
* Working with arrays of objects
* Calculating discounts and taxes
* Validating email addresses and mobile numbers
* Implementing the Euclidean algorithm
* Finding the longest increasing sequence
* Splitting arrays into smaller chunks
* Calculating the difference between dates
* Converting objects into URL query strings
* Traversing two-dimensional arrays and matrices
* Understanding array indexing and edge cases
* Writing reusable JavaScript functions
* Testing solutions with `console.log()`
* Improving logical thinking and debugging skills

## 🎯 Goal

The goal of this repository is to document my **JavaScript problem-solving journey** and strengthen my programming fundamentals through regular coding challenges.

---

**Durbar Contest #6**

💻 Keep coding. Keep learning. Keep improving. 🚀