
function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5,6,7], 3));
// [[1, 2], [3, 4], [5]]

console.log(chunkArray(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]

console.log(chunkArray([1, 2, 3], 1));
// [[1], [2], [3]]

console.log(chunkArray([], 2));
// []
