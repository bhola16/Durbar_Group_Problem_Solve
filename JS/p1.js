function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([], [1, 2, 3]));
// Output: [1, 2, 3]

console.log(mergeSortedArrays([], []));
// Output: []

console.log(mergeSortedArrays([-5, -1, 3], [-4, 0, 2]));
// Output: [-5, -4, -1, 0, 2, 3]