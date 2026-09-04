"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    const moneyLeft = totalMoney - cakeCost;
    let boughtDonuts = 0;
    if (moneyLeft >= 0) {
        boughtDonuts = Math.floor(moneyLeft / donutCost);
    }
    const leftAmount = moneyLeft - boughtDonuts * donutCost;
    return leftAmount;
}
console.log(calculateRemainingMoney(105, 20, 10)); // 0
console.log(calculateRemainingMoney(50, 30, 7)); // 6
console.log(calculateRemainingMoney(30, 30, 7)); // 0
console.log(calculateRemainingMoney(25, 30, 7)); // ?
console.log(calculateRemainingMoney(10, 20, 3)); // ?
//# sourceMappingURL=p5.js.map