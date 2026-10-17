
function longestIncreasingStreak(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let count = 1;
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count > max) {
      max = count;
    }
  }

  return max;
}

console.log(longestIncreasingStreak([1, 2, 3, 1, 2])); // 3
console.log(longestIncreasingStreak([5, 4, 3, 2, 1])); // 1
console.log(longestIncreasingStreak([1, 2, 3, 4]));    // 4
console.log(longestIncreasingStreak([]));               // 0
console.log(longestIncreasingStreak([2, 2, 3]));       // 2
