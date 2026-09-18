# 🚀 Durbar Contest #4

My solutions for **Durbar Contest #4** on Code Lab.

This contest focuses mainly on **JavaScript/TypeScript string manipulation, loops, regular expressions, and frequency counting**.

## 🏆 Contest Problems

| #   | Problem                         | Difficulty | Points | Status    |
| --- | ------------------------------- | ---------- | -----: | --------- |
| A   | Anagram Checker                 | Easy       |     30 | ✅ Solved |
| B   | Compress Consecutive Characters | Easy       |     30 | ✅ Solved |
| C   | Title Case a Sentence           | Easy       |     30 | ✅ Solved |
| D   | Count Word Frequencies          | Medium     |     60 | ✅ Solved |
| E   | Truncate String with Ellipsis   | Medium     |     60 | ✅ Solved |

**Total: 210 XP**

## 🛠️ Technologies Used

- JavaScript
- TypeScript
- Regular Expressions
- String Manipulation
- Objects
- Loops
- Array Methods

## 📂 Problems & Concepts

### A. Anagram Checker

Checks whether two strings contain the same letters with the same frequency.

**Concepts:**

- String normalization
- Regular expressions
- Character frequency
- Objects

Example:

```js
isAnagram("listen", "silent");
// true
```

---

### B. Compress Consecutive Characters

Compresses consecutive repeated characters by adding their count.

**Concepts:**

- String traversal
- Loops
- Consecutive character counting

Example:

```js
compressCharacters("aaabbc");
// "a3b2c"
```

---

### C. Title Case a Sentence

Converts a sentence so that the first letter of every word is uppercase and the remaining letters are lowercase.

It also handles leading, trailing, and multiple spaces.

**Concepts:**

- `trim()`
- `split()`
- Regular expressions
- `map()`
- `toUpperCase()`
- `toLowerCase()`

Example:

```js
titleCaseSentence("  HELLO   WORLD  ");
// "Hello World"
```

---

### D. Count Word Frequencies

Counts how many times each word appears in a sentence, ignoring case and punctuation.

**Concepts:**

- Regular expressions
- Object-based frequency counting
- `toLowerCase()`
- `match()`

Example:

```js
countWordFrequencies("Hello world, hello!");
// { hello: 2, world: 1 }
```

---

### E. Truncate String with Ellipsis

Truncates a string when it exceeds the specified maximum length and adds `...`.

**Concepts:**

- String length
- `slice()`
- Conditional logic
- Edge-case handling

Example:

```js
truncateString("Hello world, this is a long string", 10);
// "Hello w..."
```

## 📚 What I Practiced

Through these problems, I practiced:

- Working with strings
- Handling edge cases
- Regular expressions
- Frequency counting
- Loops and conditions
- Array methods
- Writing reusable functions
- JavaScript and TypeScript syntax
- Thinking about time complexity

## 🎯 Goal

The goal of this repository is to document my **competitive programming practice** and improve my problem-solving skills through regular coding challenges.

---

**Durbar Contest #4**
💻 Keep coding. Keep learning. Keep improving. 🚀
