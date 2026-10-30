function selectBestDiscount(price, offers) {
  let bestOffer = null;
  let lowestPrice = price;

  for (const offer of offers) {
    if (price >= offer.minPrice) {
      let discountedPrice;

      if (offer.type === "flat") {
        discountedPrice = price - offer.value;
      } 
      else if (offer.type === "percent") {
        discountedPrice = price - (price * offer.value / 100);
      }

      discountedPrice = Math.max(0, discountedPrice);

      if (discountedPrice < lowestPrice) {
        lowestPrice = discountedPrice;
        bestOffer = offer;
      }
    }
  }

  return bestOffer;
}

// Test case 1
console.log(selectBestDiscount(100, [
  { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
  { name: "HALF", type: "percent", value: 50, minPrice: 150 }
]));

// Output: { name: "FLAT15", type: "flat", value: 15, minPrice: 50 }


// Test case 2
console.log(selectBestDiscount(200, [
  { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
  { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
]));

// Output: { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }


// Test case 3
console.log(selectBestDiscount(100, [
  { name: "BIG", type: "flat", value: 150, minPrice: 50 },
  { name: "SMALL", type: "flat", value: 10, minPrice: 50 }
]));

// Output: { name: "BIG", type: "flat", value: 150, minPrice: 50 }


// Test case 4
console.log(selectBestDiscount(100, [
  { name: "NOT_ELIGIBLE", type: "flat", value: 50, minPrice: 200 }
]));

// Output: null