
function calculateCartTotal(items, taxRate) {
  let subtotal = 0;

  for (let item of items) {
    const itemTotal = item.price * item.quantity * (1 - item.discount / 100);

    subtotal += itemTotal;
  }

  const total = subtotal * (1 + taxRate / 100);

  return Number(total.toFixed(2));
}

// Test case 1
console.log(
  calculateCartTotal([
    { price: 100, quantity: 2, discount: 10 },
    { price: 50, quantity: 1, discount: 0 }
  ], 10)
);
// Output: 253

// Test case 2
console.log(
  calculateCartTotal([
    { price: 19.99, quantity: 3, discount: 15 }
  ], 8)
);
// Output: 55.05

// Test case 3: Empty cart
console.log(calculateCartTotal([], 10));
// Output: 0

// Test case 4: 100% discount
console.log(
  calculateCartTotal([
    { price: 100, quantity: 2, discount: 100 }
  ], 10)
);
// Output: 0
