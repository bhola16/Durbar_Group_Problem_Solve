function swapKeysAndValues(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }

  return result;
}

console.log(
  swapKeysAndValues({ a: "x", b: "y" })
);
// { x: "a", y: "b" }

console.log(
  swapKeysAndValues({ a: "x", b: "x" })
);
// { x: "b" }

console.log(
  swapKeysAndValues({ a: 10, b: 20 })
);
// { 10: "a", 20: "b" }