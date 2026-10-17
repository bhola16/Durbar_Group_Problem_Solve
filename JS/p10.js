
function diagonalSums(matrix) {
  let main = 0;
  let secondary = 0;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    main += matrix[i][i];
    secondary += matrix[i][n - 1 - i];
  }

  return { main, secondary };
}

console.log(diagonalSums([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
// { main: 15, secondary: 15 }

console.log(diagonalSums([
  [1, 2],
  [3, 4]
]));
// { main: 5, secondary: 5 }

console.log(diagonalSums([[5]]));
// { main: 5, secondary: 5 }

console.log(diagonalSums([]));
// { main: 0, secondary: 0 }
