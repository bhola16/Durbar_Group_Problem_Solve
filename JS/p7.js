
function isValidBdMobileNumber(phoneNumber) {
  return /^(\+8801|8801|01)[3-9]\d{8}$/.test(phoneNumber);
}

console.log(isValidBdMobileNumber("01712345678"));    // true
console.log(isValidBdMobileNumber("+8801712345678")); // true
console.log(isValidBdMobileNumber("01212345678"));    // false


