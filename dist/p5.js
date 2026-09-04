"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSecondLargestUnique(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    console.log(uniqueNumbers);
    if (uniqueNumbers.length < 2) {
        return null;
    }
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}
console.log(findSecondLargestUnique([10, 5, 20, 5, 15]));
console.log(findSecondLargestUnique([20, 10]));
console.log(findSecondLargestUnique([10, 10, 10]));
console.log(findSecondLargestUnique([10]));
console.log(findSecondLargestUnique([]));
//# sourceMappingURL=p5.js.map