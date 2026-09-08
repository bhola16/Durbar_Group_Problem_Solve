# Durbar Contest #3

My solutions for **Durbar Contest #3**.

## 📝 Problems

| Problem | Title                      | Difficulty |
| ------- | -------------------------- | ---------- |
| A       | Reverse Each Word          | Easy       |
| B       | Temperature Converter      | Easy       |
| C       | Is It a Palindrome?        | Easy       |
| D       | Classify Password Strength | Medium     |
| E       | Repeated Digit Sum         | Medium     |

## 💡 Solutions

### 1. Reverse Each Word

Reverses each word individually while maintaining the original order of words and spaces.

**Example:**

```text
Input:  "Hello World"
Output: "olleH dlroW"
```

**Concepts:** `split()`, `map()`, `reverse()`, `join()`

### 2. Temperature Converter

Converts a temperature from Celsius to Fahrenheit or Fahrenheit to Celsius.

**Example:**

```text
Input:  0, "C"
Output: 32
```

**Concepts:** Mathematical formulas, conditionals, rounding

### 3. Is It a Palindrome?

Checks whether a string is a palindrome while ignoring case, spaces, and punctuation.

**Example:**

```text
Input:  "A man, a plan, a canal: Panama"
Output: true
```

**Concepts:** Strings, regular expressions, `split()`, `reverse()`, `join()`

### 4. Classify Password Strength

Classifies a password as **Weak**, **Medium**, or **Strong** based on its length and character types.

The four character types are:

* Uppercase letters
* Lowercase letters
* Digits
* Special characters

**Example:**

```text
Input:  "Password1!"
Output: "Strong"
```

**Concepts:** Regular expressions, conditionals, arrays, `filter()`

### 5. Repeated Digit Sum

Repeatedly adds the digits of a number until only a single digit remains.

**Example:**

```text
Input:  9875
Output: 2
```

**Explanation:**

```text
9 + 8 + 7 + 5 = 29
2 + 9 = 11
1 + 1 = 2
```

**Concepts:** Loops, numbers, strings, digit manipulation

## 💻 Languages

Solutions are written in:

* JavaScript
* TypeScript

## 📁 Project Structure

```text
Contest 3/
├── src/
│   ├── hello.ts
│   ├── p1.ts
│   ├── p2.ts
│   ├── p3.ts
│   ├── p4.ts
│   └── p5.ts
│
├── JS/
|   |── p1.js
│   ├── p2.js
│   ├── p3.js
│   ├── p4.js
│   └── p5.js
│
├── dist/
│   └── Compiled TypeScript files
│
├── tsconfig.json
└── README.md
```

## 📚 Topics

* Strings
* Arrays
* Regular Expressions
* Loops
* Numbers
* Math
* Conditionals
* Array Methods
* Basic Algorithms
* Problem Solving

## 🎯 Contest

**Durbar Contest #3**

This branch contains my solutions for Contest #3 and is maintained separately from the other contest branches.

---

**Keep coding. Keep learning. Keep improving. 🚀**
