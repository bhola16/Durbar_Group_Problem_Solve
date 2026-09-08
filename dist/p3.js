"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(str) {
    const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseStr = newStr.split("").reverse().join("");
    return newStr === reverseStr;
}
console.log(isPalindrome("madam"));
// true
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true
console.log(isPalindrome("hello"));
// false
//# sourceMappingURL=p3.js.map