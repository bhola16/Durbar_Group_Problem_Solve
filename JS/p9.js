function reconcileInventory(initialInventory, transactions) {
  const inventory = { ...initialInventory };

  for (const transaction of transactions) {
    const { productId, quantity, type } = transaction;

    if (inventory[productId] === undefined) {
      inventory[productId] = 0;
    }

    if (type === "in") {
      inventory[productId] += quantity;
    } 
    else if (type === "out") {
      inventory[productId] = Math.max(
        0,
        inventory[productId] - quantity
      );
    }
  }

  return inventory;
}

// Test case 1
console.log(reconcileInventory(
  { apple: 10, banana: 5 },
  [
    { productId: "apple", quantity: 3, type: "in" },
    { productId: "banana", quantity: 2, type: "out" }
  ]
));
// Output: { apple: 13, banana: 3 }


// Test case 2
console.log(reconcileInventory(
  { orange: 2 },
  [
    { productId: "orange", quantity: 2, type: "out" },
    { productId: "grape", quantity: 7, type: "in" }
  ]
));
// Output: { orange: 0, grape: 7 }


// Test case 3
console.log(reconcileInventory(
  { mango: 5 },
  [
    { productId: "mango", quantity: 10, type: "out" },
    { productId: "mango", quantity: 4, type: "in" }
  ]
));
// Output: { mango: 4 }