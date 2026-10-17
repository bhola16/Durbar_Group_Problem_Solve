
function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// Test case 1
console.log(isValidEmail("user@example.com"));
// Output: true

// Test case 2
console.log(isValidEmail("invalid.email@"));
// Output: false

// Test case 3
console.log(isValidEmail("john_doe123@mail-server.org"));
// Output: true

// Test case 4
console.log(isValidEmail("user name@example.com"));
// Output: false

// Test case 5
console.log(isValidEmail("user@example.c"));
// Output: false

// Test case 6
console.log(isValidEmail("user@@example.com"));
// Output: false
