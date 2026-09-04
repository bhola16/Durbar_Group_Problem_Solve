"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkMathOperationsForNine(a, b) {
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;
    if (sum === 9 || difference === 9 || product === 9 || quotient === 9) {
        return "Nine";
    }
    return "Nein";
}
console.log(checkMathOperationsForNine(5, 4));
console.log(checkMathOperationsForNine(5, 5));
console.log(checkMathOperationsForNine(18, 2));
console.log(checkMathOperationsForNine(3, 3));
//# sourceMappingURL=p3.js.map