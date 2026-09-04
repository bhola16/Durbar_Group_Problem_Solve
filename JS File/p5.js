function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    const moneyLeft = totalMoney - cakeCost;
    let boughtDonuts = 0;

    if (moneyLeft >= 0) {
        boughtDonuts = Math.floor(moneyLeft / donutCost);
    }

    const leftAmount = moneyLeft - boughtDonuts * donutCost;

    return leftAmount;
}


console.log(calculateRemainingMoney(105, 20, 10));
console.log(calculateRemainingMoney(50, 30, 7));   
console.log(calculateRemainingMoney(35, 30, 7));   
console.log(calculateRemainingMoney(25, 30, 7));   
console.log(calculateRemainingMoney(10, 20, 3));   