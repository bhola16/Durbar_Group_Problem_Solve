function missingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(missingNumber([4,2, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2