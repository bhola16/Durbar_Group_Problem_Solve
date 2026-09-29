"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
console.log(missingNumber([4, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
//# sourceMappingURL=p1.js.map